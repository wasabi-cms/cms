define(function(require) {

  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  var ModuleView = BaseView.extend({
    template: Handlebars.compile($('#pb-module').html()),

    events: {

    },

    pageBuilder: null,
    parent: null,

    initialize: function(options) {
      this.pageBuilder = options.pageBuilder;
      this.parent = options.parent;
    },

    /**
     * Render the module.
     *
     * @returns {ModuleView}
     */
    render: function() {
      this.setElement(this.template({
        title: this.model.get('meta').get('title'),
        description: this.model.get('meta').get('description')
      }));
      this.$el.data('view', this);
      this.$el.appendTo(this.parent.$contentContainer);

      return this;
    }
  });

  return ModuleView;
});