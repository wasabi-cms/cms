define(function (require) {

  var _ = require('underscore');
  var $ = require('jquery');
  var WS = require('wasabi');
  var DialogView = require('common/DialogView');
  var RowEditorView = require('wasabi.cms.package/components/row-dialog/views/RowEditor');
  var RowEditorModel = require('wasabi.cms.package/components/page-builder/models/Row');

  var RowDialog = DialogView.extend({

    el: '.row-dialog-wrapper',

    events: _.extend(DialogView.prototype.events, {
      'click button[type="submit"]': 'onSubmit'
    }),

    type: null,

    rowEditorView: null,

    rowModel: null,

    initialize: function (options) {
      this.pageBuilder = options.pageBuilder;
      this.type = options.type || 'add';
      this.rowModel = options.rowModel || null;

      var translations = WS.get('wasabi.cms').translations.dialog[this.type + 'Row'];
      this.templateData = {
        title: translations.title,
        primaryAction: translations.primaryAction
      };

      DialogView.prototype.initialize.apply(this, arguments);
    },

    initDialogContent: function () {
      if (this.rowModel === null) {
        this.clonedModel = new RowEditorModel({
          meta: {type: 'Row'},
          data: [
            {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []},
            {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []},
            {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []},
            {meta: {type: 'Cell', grid: {colWidth: 4, baseWidth: 16}}, data: []}
          ]
        });
      } else {
        this.clonedModel = new RowEditorModel($.extend(true, {}, this.rowModel.getData()));
      }
      this.rowEditorView = WS.createView(RowEditorView, {
        pageBuilder: this.pageBuilder,
        dialog: this,
        model: this.clonedModel
      }).render();
      this.ui.content.html(this.rowEditorView.el);
    },

    setType: function (type) {
      this.type = type;
      return this;
    },

    onSubmit: function (event) {
      var $btn = $(event.currentTarget);
      if ($btn.attr('disabled') === 'disabled') {
        return;
      }
      $btn.attr('disabled', 'disabled');
      this.rowEditorView.model.set('data', this.rowEditorView.model.cells.toJSON());
      if (this.type === 'add') {
        this.pageBuilder.addRow(this.rowEditorView.model.getData());
      } else {
        var collection = this.rowModel.collection;
        var index = collection.indexOf(this.rowModel);
        collection.remove(this.rowModel);
        collection.add(this.rowEditorView.model.getData(), {at: index});
        WS.Cms.views.pageBuilder.model.rebuildContentData();
      }
      this.closeDialog();
    }

  });

  return RowDialog;

});
