define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Handlebars = require('handlebars');

  var RowView = BaseContentView.extend({
    template: Handlebars.compile($('#pb-row').html()),

    events: {

    },

    initialize: function(options) {
      this.iterateOver = this.model.cells;
      this.contentContainer = '.cells';
      BaseContentView.prototype.initialize.call(this, options);
    }
  });

  return RowView;
});