define(function (require) {

  var _ = require('underscore');
  var $ = require('jquery');
  var WS = require('wasabi');
  var Marionette = require('marionette');
  var DraggableMixin = require('wasabi.cms.package/views/DraggableMixin');

  require('jquery.color');

  var ModuleView = Marionette.ItemView.extend({

    /**
     * The view type of this view.
     */
    viewType: 'Module',

    /**
     * The template used to render the Cell view.
     */
    template: '#pb-module',

    /**
     * DOM events handled by this view.
     */
    events: {
      'click': 'onClick',
      'click .module-edit': 'onEdit',
      'click .module-duplicate': 'onDuplicate',
      'click .module-remove': 'onRemove',
      'dropped': 'onDropped'
    },

    modelEvents: {
      'change': 'onChange'
    },

    onRender: function () {
      this.$el.addClass('module');
      this.$dragHandle = this.$el;
      this.initializeDraggable();
    },

    /**
     * Construct and return a json object that is passed to the template
     * for rendering.
     *
     * @returns {{contentAreaId: *, name: *, grid: *}}
     */
    templateHelpers: function () {
      return {
        title: this.model.get('meta').get('title'),
        description: this.model.get('meta').get('description')
      };
    },

    /**
     * afterInitPlaceholder callback
     *
     * Called whenever a placeholder for this view is created.
     * Adjust the placholder height to include the 2px border.
     *
     * @param {jQuery} $placeholder
     */
    afterInitPlaceholder: function ($placeholder) {
      $placeholder.css('height', parseInt($placeholder.css('height').split('px')[0]) + 2);
    },

    /**
     * Get the placeholder width of this view.
     * This is called before the draggable clone's position is animated on top of the placeholder.
     *
     * @returns {Number}
     */
    getPlaceholderWidth: function () {
      return this.$placeholder.outerWidth();
    },

    onClick: function(event) {
      event.preventDefault();
      event.stopPropagation();
    },

    onEdit: function(event) {
      WS.Cms.views.pageBuilder.showEditModuleDialog(this.model);
    },

    onDuplicate: function (event) {
      var index = this._parent.collection.indexOf(this.model);
      var clone = $.extend(true, {}, this.model.getData());
      this._parent.collection.add(clone, {at: index + 1});
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    },

    onRemove: function(event) {
      event.preventDefault();

      this.$el.fadeOut(_.bind(function() {
        setTimeout(_.bind(function() {
          this._parent.collection.remove(this.model);
          WS.Cms.views.pageBuilder.model.rebuildContentData();
        }, this), 200);
      }, this));
    },

    onChange: function() {
      this.render();
      WS.Cms.views.pageBuilder.model.rebuildContentData();
    },

    canDrag: function(event) {
      var isModuleAction = $(event.target).parents('.module-actions').length > 0;
      return !isModuleAction;
    },

    onDropped: function() {
      this.$el.css({
        backgroundColor: '#fff7d9'
      }).animate({
        backgroundColor: '#fff'
      }, 300, _.bind(function() {
        this.$el.css({backgroundColor: ''});
      }, this));
    }

  });

  ModuleView.prototype = $.extend(ModuleView.prototype, DraggableMixin);

  return ModuleView;
});
