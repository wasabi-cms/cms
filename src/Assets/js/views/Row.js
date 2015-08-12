define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Cocktail = require('cocktail');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');
  var Handlebars = require('handlebars');

  var RowView = BaseContentView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Row',

    /**
     * The template used to render the Row view.
     */
    template: Handlebars.compile($('#pb-row').html()),

    /**
     * DOM events handled by this view.
     */
    events: {

    },

    /**
     * Initialize the Row view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      this.iterateOver = this.model.cells;
      this.contentContainer = '.cells';
      BaseContentView.prototype.initialize.call(this, options);
    },

    /**
     * afterRender callback
     *
     * Set the $dragHandle and make this view draggable.
     */
    afterRender: function() {
      this.$dragHandle = this.$('.row-actions').find('.row-sort');
      this.initializeDraggable({
        dropTargetViews: this.pageBuilder.droppableViews
      });
    },

    /**
     * afterInitPlaceholder callback
     *
     * Called whenever a placeholder for this view is created.
     * Adjust the placholder minHeight to not contain the bottom margin
     * and add 1px (needed to avoid height flicker).
     *
     * @param {jquery} $placeholder
     */
    afterInitPlaceholder: function($placeholder) {
      $placeholder.css('minHeight', $placeholder.css('height').split('px')[0] - this.$el.css('marginBottom').split('px')[0] + 1);
    },

    /**
     * Get the placeholder width of this view.
     * This is called before the draggable clone's position is animated on top of the placeholder.
     *
     * @returns {Number}
     */
    getPlaceholderWidth: function() {
      return this.$placeholder.outerWidth() + 20;
    }

  });

  Cocktail.mixin(RowView, DraggableMixin);

  return RowView;
});