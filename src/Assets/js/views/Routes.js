define(function (require) {

  var BaseView = require('common/BaseView');

  return BaseView.extend({
    /**
     * The element of this view.
     *
     * @type {string} CSS selector
     */
    el: '[class*="wasabi-cms--pages-"] .field.routes',

    /**
     * Registered events of this view.
     *
     * @type {Object}
     */
    events: {
      'click .new-route button[type="submit"]': 'onNewRouteSubmit',
      'deleteRoute': 'unblockUpdate',
      'makeDefaultRoute': 'unblockUpdate'
    },

    dataModel: null,
    pageId: null,
    elem: null,
    routeEndpoint: null,

    /**
     * Initialization of the view.
     */
    initialize: function () {
      this.pageId = $('#page-id').val();

      var $table = this.$el.find('table.routes');
      this.routeEndpoint = $table.attr('data-add-route-url');
      this.dataModel = $table.attr('data-model');
      this.elem = $table.attr('data-element');

      $('#CmsPageEditForm').on('submit', _.bind(function (event) {
        var id = $(event.originalEvent.explicitOriginalTarget).attr('id');
        if (id === 'routes-url' || id === 'routes-type') {
          event.preventDefault();
          this.submitRoute();
        }
      }, this));
    },

    onNewRouteSubmit: function (event) {
      event.preventDefault();
      this.submitRoute();
    },

    block: function (event) {
      this.blockThis({
        backgroundColor: '#fff'
      });
    },

    unblockUpdate: function (event, data) {
      this.unblockThis();
      if (data.content) {
        this.$el.html(data.content);
      }
    },

    submitRoute: function () {
      this.block(null);
      $.ajax({
        type: 'post',
        url: this.routeEndpoint,
        data: {
          url: this.$el.find('#routes-url').val(),
          route_type: this.$el.find('#routes-type').val(),
          model: this.dataModel,
          foreign_key: this.pageId,
          element: this.elem
        },
        dataType: 'json',
        success: _.bind(function (data) {
          this.unblockUpdate(null, data);
        }, this)
      });
    }
  });
});
