define(function(require) {

  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  var RowView = BaseView.extend({
    template: Handlebars.compile($('#pb-row').html()),

    events: {

    },

    /**
     * Holds the content container of the row.
     */
    $contentContainer: {},

    pageBuilder: null,
    parent: null,

    initialize: function(options) {
      this.pageBuilder = options.pageBuilder;
      this.parent = options.parent;
    },

    /**
     * Render the row.
     *
     * @returns {RowView}
     */
    render: function() {
      this.setElement(this.template());
      this.$el.data('view', this);
      this.$contentContainer = this.$('.cells');
      this.$el.appendTo(this.parent.$contentContainer);

      this.model.cells.each(_.bind(function(cell) {
        var viewClass = this.pageBuilder.getViewClass(cell.modelName);
        var viewInstance = new viewClass({
          pageBuilder: this.pageBuilder,
          parent: this,
          model: cell
        });
        viewInstance.render();
      }, this));

      return this;
    }
  });

  return RowView;
});