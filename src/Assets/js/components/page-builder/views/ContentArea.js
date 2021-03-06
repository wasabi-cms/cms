define(function (require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var DroppableMixin = require('wasabi.cms.package/views/DroppableMixin');
  var RowView = require('wasabi.cms.package/components/page-builder/views/Row');
  var ModuleView = require('wasabi.cms.package/components/page-builder/views/Module');
  var ContainerView = require('wasabi.cms.package/components/page-builder/views/Container');

  var ContentAreaView = Marionette.CompositeView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'ContentArea',

    /**
     * The template of this view.
     */
    template: '#pb-ContentArea',

    childViewContainer: '.pb-ContentArea-content',

    ui: {
      header: '.pb-ContentArea-header',
      contentArea: '.pb-ContentArea'
    },

    events: {
      'click @ui.header': 'selectContentArea'
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
      WS.Cms.views.pageBuilder.droppableViews.push(this);
    },

    onRender: function () {
      var grid = this.model.get('meta').get('grid');
      if (this.gridClass) {
        this.$el.removeClass(this.gridClass);
      }
      this.gridClass = 'grid-' + grid.get('colWidth') + '-' + grid.get('baseWidth');
      this.$el.addClass(this.gridClass);
    },

    templateHelpers: function () {
      return {
        contentAreaId: this.model.get('meta').get('contentAreaId'),
        name: this.model.get('meta').get('name')
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

    /**
     * Mark this ContentArea view as selected.
     * Triggered via DOM click.
     *
     * @returns {boolean}
     */
    selectContentArea: function () {
      WS.Cms.views.pageBuilder.selectElement(this);
    },

    /**
     * Update the visual selection state of this ContentArea view.
     * Triggered whenever the 'selected' attribute of the model changes.
     *
     * @param model
     * @param {boolean} value
     */
    onChangeSelectedState: function (model, value) {
      this.ui.contentArea.toggleClass('pb-ContentArea--selected', value);
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
      return (draggable.viewType === 'Row' || draggable.viewType === 'Module' || draggable.viewType === 'Container');
    }

  });

  ContentAreaView.prototype = $.extend(ContentAreaView.prototype, DroppableMixin);

  return ContentAreaView;
});
