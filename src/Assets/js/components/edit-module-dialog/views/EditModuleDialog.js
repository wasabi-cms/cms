define(function (require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var DialogView = require('common/DialogView');
  var MetaModel = require('wasabi.cms.package/models/Meta');

  return DialogView.extend({

    ui: {
      submitBtn: '.dialog-controls button[type="submit"]'
    },

    events: function () {
      return _.extend(DialogView.prototype.events, {
        'click .module-type': 'onClickModuleType',
        'keyup .module-search': 'onSearch',
        'click button[type="submit"]': 'saveModule',
        'click .cancel': 'closeDialog',
        'click @ui.submitBtn': 'onSubmit'
      });
    },

    $form: null,

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
      this.$el.addClass('edit-module-dialog');
      var data = this.model.getData();
      data.fetch = 1;

      WS.blockElement(this.$content, {
        zIndex: 11000
      });

      $.ajax({
        url: WS.get('wasabi.cms').moduleAction,
        data: data,
        type: 'post',
        success: _.bind(function(data) {
          WS.unblockElement(this.$content);
          this.$content.html(data.module);
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

      WS.blockElement(this.$content);

      $.ajax({
        url: this.$form.attr('action'),
        data: this.$form.serialize(),
        type: 'post',
        success: _.bind(function(data) {
          WS.unblockElement(this.$content);
          if (data.error) {
            this.handleValidationError(data);
          } else {
            this.handleModuleSubmitted(data);
          }
        }, this)
      });
    },

    registerForm: function() {
      this.$form = this.$content.find('form');
      this.$form.append('<input type="hidden" value="' + this.model.get('meta').get('moduleId') +'" name="meta[moduleId]">');
    },

    handleValidationError: function(data) {
      this.$content.html(data.module);
      this.$content.scrollTop(0);
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
