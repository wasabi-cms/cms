define(function(require) {

  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  var RowView = BaseView.extend({
    template: Handlebars.compile($('#pb-row').html()),

    events: {

    },

    pageBuilder: null,

    initialize: function() {

    },

    /**
     * Render the row.
     *
     * @returns {RowView}
     */
    render: function() {
      this.setElement(this.template());
      this.$el.data('view', this);

      return this;
    }
  });

  return RowView;
});