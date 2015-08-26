define(function(require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var DialogView = require('common/DialogView');
  var RowEditorView = require('wasabi.cms.package/components/row-dialog/views/RowEditor');
  var RowEditorModel = require('wasabi.cms.package/components/row-dialog/models/RowEditor');

  var RowDialog = DialogView.extend({

    events: function() {
      return _.extend(DialogView.prototype.events, {
        'click button[type="submit"]': 'onSubmit'
      });
    },

    type: 'add',

    rowEditorView: null,

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
      this.rowEditorView = WS.createView(RowEditorView, {
        pageBuilder: this.pageBuilder,
        dialog: this,
        model: rowEditorModel
      });
      this.rowEditorView.render();
      this.$content.html(this.rowEditorView.el);
    },

    setType: function(type) {
      this.type = type;
      return this;
    },

    onSubmit: function(event) {
      var $btn = $(event.currentTarget);
      if ($btn.attr('disabled') === 'disabled') {
        return;
      }
      $btn.attr('disabled', 'disabled');
      this.rowEditorView.model.set('data', this.rowEditorView.model.cells.toJSON());
      if (this.type === 'add') {
        this.pageBuilder.addRow(this.rowEditorView.model.getData());
      }
      this.closeDialog();
    }

  });

  return RowDialog;

});
