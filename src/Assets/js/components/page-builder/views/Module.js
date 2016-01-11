define(function (require) {

  var _ = require('underscore');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');

  var ModuleView = Marionette.ItemView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Module',

    /**
     * The template used to render the Cell view.
     */
    template: '#pb-module',

    /**
     * DOM events handled by this view.
     */
    events: {
      'click': 'onClick',
      'click .module-edit': 'onEdit',
      'click .module-remove': 'onRemove'
    },

    onRender: function () {
      this.$el.addClass('module');
      this.$dragHandle = this.$el;
      this.initializeDraggable();
    },

    /**
     * Construct and return a json object that is passed to the template
     * for rendering.
     *
     * @returns {{contentAreaId: *, name: *, grid: *}}
     */
    templateHelpers: function () {
      return {
        title: this.model.get('meta').get('title'),
        description: this.model.get('meta').get('description')
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
     * Get the placeholder width of this view.
     * This is called before the draggable clone's position is animated on top of the placeholder.
     *
     * @returns {Number}
     */
    getPlaceholderWidth: function () {
      return this.$placeholder.outerWidth();
    },

    onClick: function(event) {
      event.preventDefault();
      event.stopPropagation();
    },

    onEdit: function(event) {
      WS.Cms.views.pageBuilder.dialogs.editModule
        .setModel(this.model)
        .render();
    },

    onRemove: function(event) {
      event.preventDefault();

      this.$el.fadeOut(_.bind(function() {
        setTimeout(_.bind(function() {
          this._parent.collection.remove(this.model);
          WS.Cms.views.pageBuilder.model.rebuildContentData();
          WS.eventBus.trigger('syncAllCellHeights');
        }, this), 200);
      }, this));
    }

  });

  ModuleView.prototype = $.extend(ModuleView.prototype, DraggableMixin);

  return ModuleView;
});
