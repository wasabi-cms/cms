define(function (require) {

  var _ = require('underscore');
  var Backbone = require('backbone');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  var ModuleModel = Backbone.Model.extend({

    /**
     * The name of this model.
     */
    modelName: 'Module',

    /**
     * Initialize the Module model.
     *
     * @returns {ModuleModel}
     */
    initialize: function (attributes, options) {
      this.set('meta', new MetaModel(this.get('meta')), {silent: true});
      return this;
    },

    getData: function () {
      var meta = this.get('meta');
      var data = this.get('data');

      return {
        meta: !_.isEmpty(meta) ? meta.getData() : {},
        data: !_.isEmpty(data) ? data : {}
      };
    }

  });

  return ModuleModel;

});
