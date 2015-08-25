define(function(require) {

  var _ = require('underscore');
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
      'changedPosition': 'onChangedPosition'
    },

    onRender: function() {
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
    templateHelpers: function() {
      return {
        title: this.model.get('meta').get('title'),
        description: this.model.get('meta').get('description')
      }
    },

    /**
     * afterInitPlaceholder callback
     *
     * Called whenever a placeholder for this view is created.
     * Adjust the placholder height to include the 2px border.
     *
     * @param {jquery} $placeholder
     */
    afterInitPlaceholder: function($placeholder) {
      $placeholder.css('height', parseInt($placeholder.css('height').split('px')[0]) + 2);
    },

    /**
     * Get the placeholder width of this view.
     * This is called before the draggable clone's position is animated on top of the placeholder.
     *
     * @returns {Number}
     */
    getPlaceholderWidth: function() {
      return this.$placeholder.outerWidth();
    },

    onChangedPosition: function() {
      console.log('changedPosition', this);
    }

  });

  ModuleView.prototype = $.extend(ModuleView.prototype, DraggableMixin);

  return ModuleView;
});