define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Handlebars = require('handlebars');

  var CellView = BaseContentView.extend({
    template: Handlebars.compile($('#pb-cell').html()),

    events: {
      'click .cell-wrapper': 'selectCell'
    },

    initialize: function(options) {
      this.iterateOver = this.model.modules;
      this.contentContainer = '.cell-wrapper';
      BaseContentView.prototype.initialize.call(this, options);

      this.model.on('change:selected', this.onChangeSelectedState, this);
    },

    getTemplateData: function() {
      return {
        grid: this.model.get('meta').get('grid').toJSON()
      };
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
    }
  });

  return CellView;
});