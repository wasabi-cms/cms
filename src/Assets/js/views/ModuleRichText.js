define(function (require) {

  var _ = require('underscore');
  var MediumEditor = require('medium');
  var Marionette = require('marionette');

  return Marionette.ItemView.extend({
    template: false,

    ui: {
      content: '.medium-editor-content',
      mediumEditor: '.medium-editor',
      codePreview: '.medium-editor-code',
      codePreviewLink: '.medium-editor-show-code'
    },

    events: {
      'click @ui.codePreviewLink': 'togglePreview'
    },

    initialize: function () {
      this.render();
    },

    onRender: function () {
      this.medium = new MediumEditor(this.ui.mediumEditor.get(0), {
        toolbar: {
          buttons: ['bold', 'italic', 'unorderedlist', 'orderedlist', 'h1', 'h2', 'h3', 'h4', 'quote', 'removeFormat']
        },
        disableDoubleReturn: true
      });
      this.medium.subscribe('editableInput', _.bind(function () {
        this.ui.content.html(this.ui.mediumEditor.html());
        this.updateCodePreview();
      }, this));
      this.updateCodePreview();
    },

    togglePreview: function (event) {
      this.ui.codePreview.toggle();
    },

    updateCodePreview: function() {
      var nl = "\r\n";
      this.ui.codePreview.html(this.ui.mediumEditor.html()
        .split('</h1>').join('</h1>' + nl)
        .split('</h2>').join('</h2>' + nl)
        .split('</h3>').join('</h3>' + nl)
        .split('</h4>').join('</h4>' + nl)
        .split('</h5>').join('</h5>' + nl)
        .split('</h6>').join('</h6>' + nl)
        .split('</p>').join('</p>' + nl)
        .split('</div>').join('</div>' + nl)
      );
    }
  });

});
