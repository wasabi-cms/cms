define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Cocktail = require('cocktail');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');
  var Handlebars = require('handlebars');

  var RowView = BaseContentView.extend({
    viewType: 'Row',

    template: Handlebars.compile($('#pb-row').html()),

    events: {

    },

    initialize: function(options) {
      this.iterateOver = this.model.cells;
      this.contentContainer = '.cells';
      BaseContentView.prototype.initialize.call(this, options);
    },

    afterRender: function() {
      this.$dragHandle = this.$('.row-actions').find('.row-sort');
      this.initializeDraggable({
        dropTargetViews: this.pageBuilder.droppableViews
      });
    },

    afterInitPlaceholder: function($placeholder) {
      $placeholder.css('minHeight', $placeholder.css('height').split('px')[0] - this.$el.css('marginBottom').split('px')[0] + 1);
    }
  });

  Cocktail.mixin(RowView, DraggableMixin);

  return RowView;
});