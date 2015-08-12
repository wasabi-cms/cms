define(function(require) {

  var WS = require('wasabi');
  var DialogView = require('common/DialogView');
  var RowEditorView = require('wasabi.cms.package/views/RowEditor');
  var RowEditorModel = require('wasabi.cms.package/models/RowEditor');

  var AddRowDialog = DialogView.extend({

    type: 'add',

    initialize: function(options) {
      this.pageBuilder = options.pageBuilder;
      DialogView.prototype.initialize.call(this, options);
    },

    beforeRender: function() {
      var translations = WS.get('wasabi.cms').translations.dialog[this.type + 'Row'];
      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction
      };
    },

    initDialogContent: function() {
      var rowEditorModel = new RowEditorModel({
        meta: {type: 'Row'},
        data: [
          {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []},
          {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []},
          {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []},
          {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []}
        ]
      });
      var rowEditorView = WS.createView(RowEditorView, {
        pageBuilder: this.pageBuilder,
        dialog: this,
        model: rowEditorModel
      });
      rowEditorView.render();
    },

    setType: function(type) {
      this.type = type;
      return this;
    }

  });

  return AddRowDialog;

});
