define(function(require) {

  var $ = require('jquery');
  var WS = require('wasabi');
  var Handlebars = require('handlebars');
  var BaseView = require('common/BaseView');
  var CellEditorView = require('wasabi.cms.package/views/CellEditor');

  var RowEditorView = BaseView.extend({

    template: '',

    initialize: function(options) {
      this.dialog = options.dialog;
      this.template = Handlebars.compile($('#pb-row-editor').html());
    },

    render: function() {
      this.setElement(this.template());
      this.$content = this.$('.cells');
      this.model.cells.each(_.bind(function(cell) {
        var cellEditorView = WS.createView(CellEditorView, {
          rowEditor: this,
          model: cell
        });
        cellEditorView.render();
      }, this));
      this.dialog.$content.html(this.$el);
    }

  });

  return RowEditorView;

});
