define(function(require) {

  var Backbone = require('backbone');

  /**
   * The Content collection can hold the content models
   * ContentArea, Row and Module.
   *
   * Each of these models extend the base model Content.
   */
  return Backbone.Collection.extend({
    collectionType: 'ContentCollection'
  });

});
