define(function (require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var DialogView = require('common/DialogView');

  return DialogView.extend({

    events: function () {
      return _.extend(DialogView.prototype.events, {
        'click .module-type': 'onClickModuleType',
        'keyup .module-search': 'onSearch',
        'click button[type="submit"]': 'saveModule',
        'click .cancel': 'closeDialog'
      });
    },

    initialize: function(options) {

      DialogView.prototype.initialize.call(this, options);
    },

    beforeRender: function(options) {
      var translations = WS.get('wasabi.cms').translations.dialog.editModule;

      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction
      };
    },

    initDialogContent: function () {
      var data = this.model.getData();
      data.fetch = 1;

      $.ajax({
        url: WS.get('wasabi.cms').moduleAction,
        data: data,
        type: 'post',
        success: _.bind(function(data) {
          this.$content.html(data.module)
        }, this)
      });
    },

    setModel: function(model) {
      this.model = model;
      return this;
    }

  });

});
