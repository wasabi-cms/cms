define(function(require) {

  var WS = require('wasabi');
  var DialogView = require('common/DialogView');
  var ModuleDialogModel = require('wasabi.cms.package/components/module-dialog/models/ModuleDialogModel');
  var ModulesView = require('wasabi.cms.package/components/module-dialog/views/ModulesView');
  var ModuleCollection = require('wasabi.cms.package/components/module-dialog/collections/ModuleCollection');
  var SidebarView = require('wasabi.cms.package/components/module-dialog/views/SidebarView');

  return DialogView.extend({

    events: function () {
      return _.extend(DialogView.prototype.events, {
        'click button[type="submit"]': 'closeDialog'
      });
    },

    initialize: function(options) {
      this.model = new ModuleDialogModel({
        search: '',
        group: null
      });

      WS.eventBus.on('add-module', _.bind(this.closeDialog, this));

      DialogView.prototype.initialize.call(this, options);
    },

    beforeRender: function(options) {
      var translations = WS.get('wasabi.cms').translations.dialog.addModule;

      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction,
        sidebarLeft: true
      };
    },

    initDialogContent: function () {
      var modules = WS.get('wasabi.cms').modules;

      var moduleCollection = new ModuleCollection(modules);

      this.modulesView = new ModulesView({
        $contentContainer: this.$content,
        collection: moduleCollection,
        moduleDialogModel: this.model
      });
      this.modulesView.render();

      this.sidebarView = new SidebarView({
        $sidebarContainer: this.$sidebarLeft,
        moduleCollection: moduleCollection,
        moduleDialogModel: this.model
      });
      this.sidebarView.render();
    }

  });

});
