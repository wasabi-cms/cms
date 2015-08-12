define(function(require) {

  var WS = require('wasabi');
  var DialogView = require('common/DialogView');

  var AddModuleDialogView = DialogView.extend({

    initialize: function(options) {
      DialogView.prototype.initialize.call(this, options);
    },

    beforeRender: function(options) {
      var translations = WS.get('wasabi.cms').translations.dialog.addModule;

      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction,
        sidebarLeft: true
      };
    }

  });

  return AddModuleDialogView;

});