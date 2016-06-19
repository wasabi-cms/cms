define(function (require) {

  var _ = require('underscore');
  var $ = require('jquery');
  var WS = require('wasabi');
  var DialogView = require('common/DialogView');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  return DialogView.extend({

    el: '.edit-module-dialog-wrapper',

    ui: _.extend(DialogView.prototype.ui, {
      submitBtn: '.dialog-controls button[type="submit"]'
    }),

    events: _.extend(DialogView.prototype.events, {
        'click .module-type': 'onClickModuleType',
        'keyup .module-search': 'onSearch',
        'click button[type="submit"]': 'saveModule',
        'click .cancel': 'closeDialog',
        'click @ui.submitBtn': 'onSubmit'
    }),

    $form: null,

    initialize: function(options) {
      var translations = WS.get('wasabi.cms').translations.dialog.editModule;

      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction
      };

      DialogView.prototype.initialize.call(this, options);
    },

    initDialogContent: function () {
      this.$el.addClass('edit-module-dialog');
      var data = this.model.getData();
      data.fetch = 1;

      WS.blockElement(this.ui.content, {
        zIndex: 11000
      });

      $.ajax({
        url: WS.get('wasabi.cms').moduleAction,
        data: data,
        type: 'post',
        success: _.bind(function(data) {
          WS.unblockElement(this.ui.content);
          this.ui.content.html(data.module);
          this.registerForm();
        }, this)
      });
    },

    setModel: function(model) {
      this.model = model;
      return this;
    },

    onSubmit: function(event) {
      event.preventDefault();

      WS.blockElement(this.ui.content);

      $.ajax({
        url: this.$form.attr('action'),
        data: this.$form.serialize(),
        type: 'post',
        success: _.bind(function(data) {
          WS.unblockElement(this.ui.content);
          if (data.error) {
            this.handleValidationError(data);
          } else {
            this.handleModuleSubmitted(data);
          }
        }, this)
      });
    },

    registerForm: function() {
      this.$form = this.ui.content.find('form');
      this.$form.append('<input type="hidden" value="' + this.model.get('meta').get('moduleId') +'" name="meta[moduleId]">');
    },

    handleValidationError: function(data) {
      this.ui.content.html(data.module);
      this.ui.content.scrollTop(0);
      this.registerForm();
    },

    handleModuleSubmitted: function(data) {
      if (data.module && data.module.meta) {
        data.module.meta = new MetaModel(data.module.meta);
      }
      this.model.set(data.module);
      this.closeDialog();
    }

  });

});
