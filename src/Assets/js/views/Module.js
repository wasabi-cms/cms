define(function(require) {

  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  var ModuleView = BaseView.extend({
    template: Handlebars.compile($('#pb-module').html()),

    events: {

    },

    pageBuilder: null,

    initialize: function() {

    },

    /**
     * Render the module.
     *
     * @returns {ModuleView}
     */
    render: function() {
      this.setElement(this.template());
      this.$el.data('view', this);

      return this;
    }
  });

  return ModuleView;
});