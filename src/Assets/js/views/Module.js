define(function(require) {

  var _ = require('underscore');
  var Cocktail = require('cocktail');
  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');
  var Handlebars = require('handlebars');

  var ModuleView = BaseContentView.extend({
    viewType: 'Module',

    template: Handlebars.compile($('#pb-module').html()),

    events: {

    },

    initialize: function(options) {
      BaseContentView.prototype.initialize.call(this, options);
    },

    getTemplateData: function() {
      return {
        title: this.model.get('meta').get('title'),
        description: this.model.get('meta').get('description')
      };
    },

    afterRender: function() {
      this.$dragHandle = this.$el;
      this.initializeDraggable({});
    },

    afterInitPlaceholder: function($placeholder) {
      $placeholder.css('height', parseInt($placeholder.css('height').split('px')[0]) + 2);
    }
  });

  Cocktail.mixin(ModuleView, DraggableMixin);

  return ModuleView;
});