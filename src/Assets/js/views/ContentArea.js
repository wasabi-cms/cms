define(function(require) {

  var BaseContentView = require('wasabi.cms.package/views/BaseContent');
  var Handlebars = require('handlebars');

  var ContentAreaView = BaseContentView.extend({
    /**
     * The template used to render the ContentArea view.
     */
    template: Handlebars.compile($('#pb-content-area').html()),

    /**
     * Holds a reference to the .content-area div.
     */
    $contentArea: {},

    /**
     * Registered DOM events of the ContentArea view.
     */
    events: {
      'click .ca-content': 'selectContentArea'
    },

    /**
     * Initialize the ContentArea view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      this.contentContainer = '.ca-content';
      this.iterateOver = this.model.content;
      BaseContentView.prototype.initialize.call(this, options);

      this.model.on('change:selected', this.onChangeSelectedState, this);
    },

    getTemplateData: function() {
      return {
        contentAreaId: this.model.get('meta').get('contentAreaId'),
        name: this.model.get('meta').get('name'),
        grid: this.model.get('meta').get('grid').toJSON()
      }
    },

    afterRender: function() {
      this.$contentArea = this.$('.content-area');
    },

    /**
     * Mark this ContentArea view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    selectContentArea: function(event) {
      if (!$(event.target).is('.ca-content')) {
        return false;
      }
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
      this.$contentArea.toggleClass('content-area--selected', value);
    }
  });

  return ContentAreaView;
});
