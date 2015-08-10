define(function(require) {

  var _ = require('underscore');
  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var DraggableView = require('wasabi.cms.package/views/DraggableView');
  var Handlebars = require('handlebars');

  var ModuleView = BaseContentView.extend({
    template: Handlebars.compile($('#pb-module').html()),

    events: function() {
      return _.extend(DraggableView.prototype.events, {

      });
    },

    initialize: function(options) {
      BaseContentView.prototype.initialize.call(this, options);
      DraggableView.prototype.initialize.call(this, options);
      console.log(this);
    },

    getTemplateData: function() {
      return {
        title: this.model.get('meta').get('title'),
        description: this.model.get('meta').get('description')
      };
    }
  });

  return _.extend(ModuleView, DraggableView);
});