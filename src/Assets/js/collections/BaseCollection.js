define(function(require) {

  var Backbone = require('backbone');

  var BaseCollection = Backbone.Collection.extend({

    getData: function() {
      var data = [];
      this.each(function(contentModel) {
        data.push(contentModel.getData());
      });
      return data;
    }

  });

  return BaseCollection;

});