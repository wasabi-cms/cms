define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Cocktail = require('cocktail');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');
  var Handlebars = require('handlebars');

  var RowView = BaseContentView.extend({
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
      this.initializeDraggable({});
    }
  });

  Cocktail.mixin(RowView, DraggableMixin);

  return RowView;
});