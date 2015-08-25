define(function(require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var DroppableMixin = require('wasabi.cms.package/views/DroppableMixin');
  var RowModel = require('wasabi.cms.package/components/page-builder/models/Row');
  var RowView = require('wasabi.cms.package/components/page-builder/views/Row');
  var ModuleModel = require('wasabi.cms.package/components/page-builder/models/Module');
  var ModuleView = require('wasabi.cms.package/components/page-builder/views/Module');

  var ContentAreaView = Marionette.CompositeView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'ContentArea',

    /**
     * The template of this view.
     */
    template: '#pb-content-area',

    childViewContainer: '.ca-content',

    /**
     * DOM events handled by this view.
     */
    //events: {
    //  'click .ca-content': 'selectContentArea'
    //},

    /**
     * Initialize the ContentArea view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      this.collection = this.model.content;
      WS.Cms.views.pageBuilder.droppableViews.push(this);
      //this.model.on('change:selected', this.onChangeSelectedState, this);
    },

    onRender: function() {
      var grid = this.model.get('meta').get('grid');
      if (this.gridClass) {
        this.$el.removeClass(this.gridClass);
      }
      this.gridClass = 'grid-' + grid.get('colWidth') + '-' + grid.get('baseWidth');
      this.$el.addClass(this.gridClass);
    },

    templateHelpers: function() {
      return {
        contentAreaId: this.model.get('meta').get('contentAreaId'),
        name: this.model.get('meta').get('name')
      }
    },

    buildChildView: function(child, ChildViewClass, childViewOptions) {
      var view = null;
      var type = child.get('meta').get('type');

      switch(type) {
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
      }

      return view;
    },

    /**
     * Mark this ContentArea view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    //selectContentArea: function(event) {
    //  if (!$(event.target).is('.ca-content')) {
    //    return false;
    //  }
    //  this.pageBuilder.selectElement(this);
    //},

    /**
     * Update the visual selection state of this ContentArea view.
     * Triggered whenever the 'selected' attribute of the model changes.
     *
     * @param model
     * @param {boolean} value
     */
    //onChangeSelectedState: function(model, value) {
    //  this.$contentArea.toggleClass('content-area--selected', value);
    //},

    /**
     * canDrop callback
     * Called whenever a draggable view is moved over this view.
     * Return true to allow dropping of the draggable, false otherwise.
     *
     * @param draggable
     * @returns {boolean}
     */
    canDrop: function(draggable) {
      if (typeof draggable.viewType === 'undefined') {
        return false;
      }
      return (draggable.viewType === 'Row' || draggable.viewType === 'Module');
    }

  });

  ContentAreaView.prototype = $.extend(ContentAreaView.prototype, DroppableMixin);

  return ContentAreaView;
});
