define(function(require) {

  var BaseCollection = require('wasabi.cms.package/collections/BaseCollection');

  /**
   * The Content collection can hold the content models
   * ContentArea, Row and Module.
   *
   * Each of these models extend the base model Content.
   */
  return BaseCollection.extend({
    collectionType: 'ContentCollection'
  });

});
