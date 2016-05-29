define(function (require) {

  var _ = require('underscore');
  var $ = require('jquery');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');
  var DroppableMixin = require('wasabi.cms.package/views/DroppableMixin');
  var RowView = require('wasabi.cms.package/components/page-builder/views/Row');
  var ModuleView = require('wasabi.cms.package/components/page-builder/views/Module');

  var ContainerView = Marionette.CompositeView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Container',

    /**
     * The template of this view.
     */
    template: '#pb-Container',

    childViewContainer: '.pb-Container-content',

    ui: {
      header: '.pb-Container-header',
      dragHandle: '.pb-Container-move',
      settings: '.pb-Container-settings',
      cssClasses: '.pb-Container-css-classes',
      containerElement: '.pb-Container-element',
      useInnerContainer: '.pb-Container-use-inner-container',
      innerCssClasses: '.pb-Container-inner-container-css-classes'
    },

    events: {
      'click @ui.header': 'selectContainer',
      'click @ui.settings': 'toggleSettings',
      'keyup @ui.cssClasses': 'updateCssClasses',
      'change @ui.containerElement': 'updateContainerElement',
      'change @ui.useInnerContainer': 'updateUseInnerContainer',
      'keyup @ui.innerCssClasses': 'updateInnerCssClasses'
    },

    modelEvents: {
      'change:selected': 'onChangeSelectedState'
    },

    /**
     * Initialize the ContentArea view.
     *
     * @param {Object} options
     */
    initialize: function (options) {
      this.collection = this.model.content;
      this.parent = options.parent;
      WS.Cms.views.pageBuilder.droppableViews.push(this);
      this.model.get('meta').on('change:cssClasses', this.refreshCssClasses, this);
      this.model.get('meta').on('change:containerElement', this.render);
      this.model.get('meta').on('change:useInnerContainer', this.render);
      this.model.get('meta').on('change:innerCssClasses', this.refreshInnerCssClasses, this);
    },

    onRender: function () {
      this.$el.attr('data-type', 'container');
      this.$dragHandle = this.ui.dragHandle;
      this.initializeDraggable();
    },

    templateHelpers: function () {
      var cssClasses = '';
      var cssClassesValue = '';
      var cssClassesProp = this.model.get('meta').get('cssClasses');
      if (cssClassesProp) {
        cssClasses = '.' + cssClassesProp.split(' ').join('.');
        cssClassesValue = cssClassesProp;
      }

      var containerElement = '';
      var containerElementProp = this.model.get('meta').get('containerElement');
      if (containerElementProp) {
        containerElement = containerElementProp;
      }

      var useInnerContainer = false;
      var useInnerContainerProp = this.model.get('meta').get('useInnerContainer');
      if (useInnerContainerProp) {
        useInnerContainer = useInnerContainerProp;
      }

      var innerContainerCssClasses = '';
      var innerContainerCssClassesValue = '';
      var innerContainerCssClassesProp = this.model.get('meta').get('innerCssClasses');
      if (innerContainerCssClassesProp) {
        innerContainerCssClasses = '.' + innerContainerCssClassesProp.split(' ').join('.');
        innerContainerCssClassesValue = innerContainerCssClassesProp;
      }

      return {
        name: this.model.get('meta').get('name') || 'Container',
        cssClasses: cssClasses,
        cssClassesValue: cssClassesValue,
        containerElement: containerElement,
        useInnerContainer: useInnerContainer,
        innerCssClasses: innerContainerCssClasses,
        innerCssClassesValue: innerContainerCssClassesValue
      };
    },

    buildChildView: function (child, ChildViewClass, childViewOptions) {
      var view = null;
      var type = child.get('meta').get('type');

      switch (type) {
        case 'Row':
          view = new RowView({
            model: child
          });
          break;
        case 'Module':
          view = new ModuleView({
            model: child
          });
          break;
        case 'Container':
          view = new ContainerView({
            model: child
          });
          break;
      }

      return view;
    },

    childViewOptions: function () {
      return {
        parent: this
      };
    },

    /**
     * afterInitPlaceholder callback
     *
     * Called whenever a placeholder for this view is created.
     * Adjust the placholder height to include the 2px border.
     *
     * @param {jQuery} $placeholder
     */
    afterInitPlaceholder: function ($placeholder) {
      $placeholder.css('height', parseInt($placeholder.css('height').split('px')[0]) + 2);
    },

    /**
     * Mark this Container view as selected.
     * Triggered via DOM click.
     *
     * @returns {boolean}
     */
    selectContainer: function () {
      WS.Cms.views.pageBuilder.selectElement(this);
    },

    /**
     * Update the visual selection state of this Container view.
     * Triggered whenever the 'selected' attribute of the model changes.
     *
     * @param model
     * @param {boolean} value
     */
    onChangeSelectedState: function (model, value) {
      this.$el.toggleClass('pb-Container--selected', value);
    },

    /**
     * canDrop callback
     * Called whenever a draggable view is moved over this view.
     * Return true to allow dropping of the draggable, false otherwise.
     *
     * @param draggable
     * @returns {boolean}
     */
    canDrop: function (draggable) {
      if (typeof draggable.viewType === 'undefined') {
        return false;
      }
      return (draggable.viewType === 'Row' || draggable.viewType === 'Module');
    },

    toggleSettings: function (event) {
      event.preventDefault();
      event.stopPropagation();

      this.$el.toggleClass('pb-Container--settings-open');
    },

    updateCssClasses: function (event) {
      this.model.get('meta').set('cssClasses', this.ui.cssClasses.val().trim());
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    },

    updateContainerElement: function (event) {
      this.model.get('meta').set('containerElement', this.ui.containerElement.val().trim());
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    },

    updateUseInnerContainer: function (event) {
      this.model.get('meta').set('useInnerContainer', this.ui.useInnerContainer.is(':checked'));
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    },

    updateInnerCssClasses: function (event) {
      this.model.get('meta').set('innerCssClasses', this.ui.innerCssClasses.val().trim());
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    },

    refreshCssClasses: function (event) {
      this.render();
      this.setCaretAtEnd(this.ui.cssClasses.get(0));
    },

    refreshInnerCssClasses: function (event) {
      this.render();
      this.setCaretAtEnd(this.ui.innerCssClasses.get(0));
    },

    setCaretAtEnd: function (elem) {
      var elemLen = elem.value.length;
      // For IE Only
      if (document.selection) {
        // Set focus
        elem.focus();
        // Use IE Ranges
        var oSel = document.selection.createRange();
        // Reset position to 0 & then set at end
        oSel.moveStart('character', -elemLen);
        oSel.moveStart('character', elemLen);
        oSel.moveEnd('character', 0);
        oSel.select();
      }
      else if (elem.selectionStart || elem.selectionStart == '0') {
        // Firefox/Chrome
        elem.selectionStart = elemLen;
        elem.selectionEnd = elemLen;
        elem.focus();
      }
    }

  });

  ContainerView.prototype = $.extend(ContainerView.prototype, DraggableMixin, DroppableMixin);

  return ContainerView;
});
