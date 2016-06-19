define(function(require) {

  var _ = require('underscore');
  var WS = require('wasabi');
  var DialogView = require('common/DialogView');
  var ModuleDialogModel = require('wasabi.cms.package/components/module-dialog/models/ModuleDialogModel');
  var ModulesView = require('wasabi.cms.package/components/module-dialog/views/ModulesView');
  var ModuleCollection = require('wasabi.cms.package/components/module-dialog/collections/ModuleCollection');
  var SidebarView = require('wasabi.cms.package/components/module-dialog/views/SidebarView');

  return DialogView.extend({

    el: '.module-dialog-wrapper',

    events: _.extend(DialogView.prototype.events, {
        'click button[type="submit"]': 'closeDialog'
    }),

    initialize: function(options) {
      this.model = new ModuleDialogModel({
        search: '',
        group: null
      });

      WS.eventBus.on('add-module', this.closeDialog, this);

      var translations = WS.get('wasabi.cms').translations.dialog.addModule;

      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction,
        sidebarLeft: true
      };

      DialogView.prototype.initialize.call(this, options);
    },

    initDialogContent: function () {
      var modules = WS.get('wasabi.cms').modules;

      var moduleCollection = new ModuleCollection(modules);

      this.modulesView = new ModulesView({
        $contentContainer: this.ui.content,
        collection: moduleCollection,
        moduleDialogModel: this.model
      });
      this.modulesView.render();

      this.sidebarView = new SidebarView({
        $sidebarContainer: this.ui.sidebarLeft,
        moduleCollection: moduleCollection,
        moduleDialogModel: this.model
      });
      this.sidebarView.render();
    }

  });

});
