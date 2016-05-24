define(function (require) {

  var _ = require('underscore');
  var Marionette = require('marionette');

  return Marionette.ItemView.extend({

    template: '#module-dialog-sidebar',
    className: 'module-dialog-sidebar',
    tagName: 'div',

    ui: {
      'moduleSearch': '#module-search',
      'moduleGroup': '.module-group'
    },

    events: {
      'keyup @ui.moduleSearch': 'handleSearch',
      'click @ui.moduleGroup': 'handleFilter'
    },

    initialize: function(options) {
      this.$sidebarContainer = options.$sidebarContainer;
      this.moduleCollection = options.moduleCollection;
      this.moduleDialogModel = options.moduleDialogModel;
    },

    onRender: function() {
      this.$sidebarContainer.append(this.$el);
    },

    templateHelpers: function() {
      var groups = _.uniq(this.moduleCollection.pluck('group'));

      return {
        groups: groups
      };
    },

    handleSearch: function() {
      this.moduleDialogModel.set('search', this.ui.moduleSearch.val());
    },

    handleFilter: function(event) {
      var $currentTarget = $(event.currentTarget);
      if ($currentTarget.hasClass('active')) {
        return;
      }

      this.ui.moduleGroup.removeClass('active');
      $currentTarget.addClass('active');

      if ($currentTarget.hasClass('disable-filter')) {
        this.moduleDialogModel.set('group', null);
      } else {
        this.moduleDialogModel.set('group', $currentTarget.text());
      }
    }

  });

});
