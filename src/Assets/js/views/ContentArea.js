define(function(require) {

  var BaseView = require('common/BaseView');
  var Handlebars = require('handlebars');

  var ContentAreaView = BaseView.extend({
    /**
     * The template used to render the ContentArea view.
     */
    template: Handlebars.compile($('#pb-content-area').html()),

    /**
     * The actual .content-area div.
     */
    $contentArea: null,

    /**
     * The inner content of the ContentArea view.
     */
    $content: null,

    /**
     * Registered DOM events of the ContentArea view.
     */
    events: {
      'click .ca-header': 'selectContentArea'
    },

    /**
     * Reference to the PageBuilder view instance.
     */
    pageBuilder: null,

    /**
     * Initialize the ContentArea view.
     *
     * @param {Object} options
     */
    initialize: function(options) {
      this.pageBuilder = options.pageBuilder;
      this.model.on('change:selected', this.onChangeSelectedState, this);
      this.model.content.on('add', this.onAddContent, this);
    },

    /**
     * Render the content area.
     *
     * @returns {ContentAreaView}
     */
    render: function() {
      this.setElement(this.template({
        contentAreaId: this.model.get('meta').get('contentAreaId'),
        name: this.model.get('meta').get('name'),
        grid: this.model.get('meta').get('grid').toJSON()
      }));
      this.$contentArea = this.$el.find('.content-area');
      this.$el.data('view', this);

      return this;
    },

    /**
     * Mark this ContentArea view as selected.
     * Triggered via DOM click.
     *
     * @param {Event} event
     * @returns {boolean}
     */
    selectContentArea: function(event) {
      if ($(event.target).closest('a').length > 0) {
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
    },

    onAddContent: function(contentModel, collection, options) {
      console.log('here');
      options = _.extend({
        skipAnimation: false
      }, options);

      /** @var {ContentAreaView|RowView|CellView|ModuleView} contentViewClass */
      var contentViewClass = this.pageBuilder.contentViewClasses[contentModel.modelName];
      var contentView = new contentViewClass({
        model: contentModel,
        pageBuilder: this.pageBuilder
      });
      contentView.render();

      // Attach the content to the page builder DOM.
      if (typeof options.at === 'undefined' || collection.length <= 1) {
        // Insert the content at the end of the container.
        contentView.$el.appendTo(this.$contentContainer);
        console.log(contentView.$el.html());
      } else {
        // Insert the content at a specific position
        //contentView.$el.insertAfter(
        //  this.$contentContainer.find('> div').eq(options.at - 1)
        //);
      }
    }
  });

  return ContentAreaView;
});
