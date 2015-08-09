define(function(require) {

  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  var CellView = BaseView.extend({
    template: Handlebars.compile($('#pb-cell').html()),

    events: {
      'click .cell-wrapper': 'selectCell'
    },

    /**
     * Holds the content container of the cell.
     */
    $contentContainer: {},

    pageBuilder: null,
    parent: null,

    initialize: function(options) {
      this.pageBuilder = options.pageBuilder;
      this.parent = options.parent;

      this.model.on('change:selected', this.onChangeSelectedState, this);
    },

    /**
     * Render the cell.
     *
     * @returns {CellView}
     */
    render: function() {
      this.setElement(this.template({
        grid: this.model.get('meta').get('grid').toJSON()
      }));
      this.$el.data('view', this);
      this.$contentContainer = this.$('.cell-wrapper');
      this.$el.appendTo(this.parent.$contentContainer);

      this.model.modules.each(_.bind(function(module) {
        var viewClass = this.pageBuilder.getViewClass(module.modelName);
        var viewInstance = new viewClass({
          pageBuilder: this.pageBuilder,
          parent: this,
          model: module
        });
        viewInstance.render();
      }, this));

      return this;
    },

    /**
     * Mark this Cell view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    selectCell: function(event) {
      this.pageBuilder.selectElement(this);
    },

    /**
     * Update the visual selection state of this ContentArea view.
     * Triggered whenever the 'selected' attribute of the model changes.
     *
     * @param model
     * @param {boolean} value
     */
    onChangeSelectedState: function(model, value) {
      this.$el.toggleClass('cell--selected', value);
    },
  });

  return CellView;
});