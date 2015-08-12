define(function(require) {

  var _ = require('underscore');
  var Cocktail = require('cocktail');
  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');

  var ModuleView = BaseContentView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Module',

    /**
     * The template used to render the Cell view.
     */
    templateSelector: '#pb-module',

    /**
     * DOM events handled by this view.
     */
    events: {

    },

    /**
     * Initialize the Module view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      BaseContentView.prototype.initialize.call(this, options);
    },

    /**
     * Construct and return a json object that is passed to the template
     * for rendering.
     *
     * @returns {{contentAreaId: *, name: *, grid: *}}
     */
    getTemplateData: function() {
      return {
        title: this.model.get('meta').get('title'),
        description: this.model.get('meta').get('description')
      };
    },

    /**
     * afterRender callback
     *
     * Set the $dragHandle and make this view draggable.
     */
    afterRender: function() {
      this.$dragHandle = this.$el;
      this.initializeDraggable({});
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
    }

  });

  Cocktail.mixin(ModuleView, DraggableMixin);

  return ModuleView;
});