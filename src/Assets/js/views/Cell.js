define(function(require) {

  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  var CellView = BaseView.extend({
    template: Handlebars.compile($('#pb-cell').html()),

    events: {
      'click .cell-wrapper': 'selectCell'
    },

    pageBuilder: null,

    initialize: function() {

    },

    /**
     * Render the cell.
     *
     * @returns {CellView}
     */
    render: function() {
      this.setElement(this.template());
      this.$el.data('view', this);

      return this;
    },

    selectCell: function(event) {

    }
  });

  return CellView;
});