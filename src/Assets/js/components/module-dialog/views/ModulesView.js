define(function (require) {

  var Marionette = require('marionette');
  var ModuleView = require('wasabi.cms.package/components/module-dialog/views/ModuleView');

  return Marionette.CollectionView.extend({

    className: 'modules row',

    childView: ModuleView,

    initialize: function(options) {
      this.$contentContainer = options.$contentContainer;
      this.moduleDialogModel = options.moduleDialogModel;
      this.moduleDialogModel.on('change', this.render);
    },

    filter: function(child, index, collection) {
      var search = this.moduleDialogModel.get('search');
      var group = this.moduleDialogModel.get('group');

      if (search === '' && group === null) {
        return true;
      } else if (search !== '' && group === null) {
        if (child.get('name').toLowerCase().indexOf(search.toLowerCase()) !== -1) {
          return true;
        }
      } else if (search === '' && group !== null) {
        if (child.get('group') === group) {
          return true;
        }
      } else if (search !== '' && group !== null) {
        if (child.get('name').toLowerCase().indexOf(search.toLowerCase()) !== -1 && child.get('group') === group) {
          return true;
        }
      }

      return false;
    },

    onRender: function() {
      this.$contentContainer.append(this.$el);
    }

  });

});
