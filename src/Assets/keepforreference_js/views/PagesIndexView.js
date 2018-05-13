define(function(require) {

  var _ = require('underscore');
  var $ = require('jquery');
  var BaseView = require('common/BaseView');
  var Cookies = require('wasabi.cms.package/libs/js.cookie');

  require('jquery.nSortable');

  return BaseView.extend({

    el: '#pages',

    /**
     * Registered events of this view.
     *
     * @type {Object}
     */
    events: {
      'nSortable-change': 'onSort',
      'click .expander': 'toggleSubTree'
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
    },

    toggleSubTree: function(event) {
      event.preventDefault();
      var $currentTarget = $(event.currentTarget);
      var $li = $currentTarget.closest('li.page');
      var $ul = $li.find('ul').first();
      if (!$li.hasClass('closed')) {
        $ul.slideUp(300, _.bind(function() {
          $li.addClass('closed');
          $currentTarget.removeClass('wicon-collapse').addClass('wicon-expand');
          this.setClosedPagesCookie();
        }, this));
      } else {
        $ul.slideDown(300, _.bind(function() {
          $li.removeClass('closed');
          $currentTarget.removeClass('wicon-expand').addClass('wicon-collapse');
          this.setClosedPagesCookie();
        }, this));
      }
    },

    setClosedPagesCookie: function() {
      var closedPages = [];
      this.$('.page.closed').each(function() {
        closedPages.push(parseInt($(this).attr('data-cms-page-id')));
      });
      Cookies.set('closed_pages', closedPages, {expires: 365, path: ''});
    }
  });
});
