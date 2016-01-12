define(function(require) {

  var _ = require('underscore');
  var $ = require('jquery');
  var BaseView = require('common/BaseView');
  require('jquery.nSortable');

  return BaseView.extend({

    el: '#pages',

    /**
     * Registered events of this view.
     *
     * @type {Object}
     */
    events: {
      'nSortable-change': 'onSort'
    },

    pagesReorderUrl: false,

    initialize: function(options) {
      this.pagesReorderUrl = this.$el.attr('data-reorder-url');
      this.$el.nSortable({
        handle: 'a.move',
        tabWidth: 20,
        placeholder: 'sortable-placeholder',
        dataAttribute: 'data-cms-page-id',
        maxDepth: Infinity,
        serializeKey: '',
        serializeWrapKeys: false,
        serializeParentIdNullable: true,
        leftKey: 'lft',
        rightKey: 'rght',
        animateTarget: false
      });
    },

    onSort: function(event, nSortable) {
      this.blockThis({
        backgroundColor: '#fff',
        deltaHeight: -1
      });
      $.ajax({
        type: 'post',
        dataType: 'json',
        url: this.pagesReorderUrl,
        data: nSortable.serialize(),
        cache: false,
        success: _.bind(this.unblockThis, this)
      });
    }
  });
});
