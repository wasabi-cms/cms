define(function(require) {

  var WS = require('wasabi');
  var DialogView = require('common/DialogView');

  var AddRowDialog = DialogView.extend({

    type: 'add',

    initialize: function(options) {
      DialogView.prototype.initialize.call(this, options);
    },

    beforeRender: function() {
      var translations = WS.get('wasabi.cms').translations.dialog[this.type + 'Row'];
      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction
      };
    },

    setType: function(type) {
      this.type = type;
      return this;
    }

  });

  return AddRowDialog;

});
