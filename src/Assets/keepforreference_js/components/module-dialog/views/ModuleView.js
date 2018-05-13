define(function (require) {

  var WS = require('wasabi');
  var Marionette = require('marionette');

  return Marionette.ItemView.extend({

    template: '#module-dialog-module',
    tagName: 'div',
    className: 'module',

    events: {
      'click': 'onClick'
    },

    onClick: function(event) {
      event.preventDefault();

      var data = {
        meta: {
          type: 'Module',
          moduleId: this.model.get('namespace'),
          title: this.model.get('name'),
          description: this.model.get('description')
        },
        data: {}
      };

      WS.eventBus.trigger('add-module', data);
    }

  });

});
