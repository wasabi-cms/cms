define(function(require) {

  var BaseView = require('common/BaseView');

  var BaseContentView = BaseView.extend({

    /**
     * The selector for $contentContainer.
     */
    contentContainer: '',

    /**
     * Holds a reference to a backbone collection.
     */
    iterateOver: null,

    /**
     * Holds the content container of the base content.
     * Should be set by the extending child view.
     */
    $contentContainer: {},

    /**
     * Holds a reference to the page builder view.
     */
    pageBuilder: null,

    /**
     * Holds a reference to the parent view.
     */
    parent: null,

    /**
     * Initialize the base content view.
     *
     * @param options
     */
    initialize: function(options) {
      this.pageBuilder = options.pageBuilder;
      this.parent = options.parent;
    },

    /**
     * Render the base content view.
     *
     *
     * @returns {BaseContentView}
     */
    render: function() {
      this.setElement(this.template(this.getTemplateData()));
      this.$el.data('view', this);
      this.$el.appendTo(this.parent.$contentContainer);

      if (this.contentContainer) {
        this.$contentContainer = this.$(this.contentContainer);
      }

      if (this.iterateOver) {
        this.iterateOver.each(_.bind(function(model) {
          var viewClass = this.pageBuilder.getViewClass(model.modelName);
          var viewInstance = new viewClass({
            pageBuilder: this.pageBuilder,
            parent: this,
            model: model
          });
          viewInstance.render();
        }, this));
      }

      this.afterRender();

      return this;
    },

    afterRender: function() {
      return this;
    },

    /**
     * Should be implemented by the child view
     * and return all data needed to render the template.
     *
     * @returns {{}}
     */
    getTemplateData: function() {
      return {}
    }
  });

  return BaseContentView;
});