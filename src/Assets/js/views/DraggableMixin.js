define(function(require) {

  var $ = require('jquery');
  require('jquery.scrollParent');
  require('jquery.position');

  /**
   * Returns whether an element is touching an x/y coordinate.
   *
   * @param {number} x The coordinate's X position.
   * @param {number} y The coordinate's Y position.
   * @param {object} elem Either an actual element or a jQuery collection.
   * @return boolean
   */
  function hitTest(x, y, elem) {
    var $el = $(elem);
    var offset = $el.offset();
    var x1 = offset.left;
    var y1 = offset.top;
    var x2 = x1 + $el.outerWidth();
    var y2 = y1 + $el.outerHeight();
    return (x >= x1 && x < x2 && y >= y1 && y < y2);
  }

  /**
   * Default options
   *
   * @type {{opacity: number, scroll: boolean, scrollSensitivity: number, scrollSpeed: number, animateTarget: boolean, animationLength: number, hideDraggable: boolean}}
   */
  var defaults = {
    opacity: 0.7,
    scroll: true,
    scrollSensitivity: 20,
    scrollSpeed: 20,
    animateTarget: true,
    animationLength: 300,
    hideDraggable: false,
    dropTargetViews: null
  };

  var DraggableMixin = {

    /**
     * @type {object}
     * @property {number} startMouse.x
     * @property {number} startMouse.y
     */
    startMouse: {},

    /**
     * @type {object}
     * @property {number} startPosition.x
     * @property {number} startPosition.y
     */
    startPosition: {},

    /**
     * @type {object}
     * @property {number} mouseStartRelativeToElement.x
     * @property {number} mouseStartRelativeToElement.y
     */
    mouseStartRelativeToElement: {},

    /**
     * @type {object}
     * @property {number} offset.x
     * @property {number} offset.y
     */
    offset: {},

    /**
     * Tell wheter this draggable view instance is currently dragged.
     *
     * @type {boolean}
     */
    isDragging: false,

    /**
     * The parent scroll container if an element is dragged over the boundaries of the parent or screen.
     *
     * @type {jquery}
     */
    $scrollParent: null,

    /**
     * The drag handle element.
     */
    $dragHandle: null,

    /**
     * The current drop target view the draggable view is dragged over.
     *
     * @type {object}
     */
    activeDropTargetView: null,

    initializeDraggable: function(options) {
      this.options = $.extend(defaults, {}, options);
      this.model.view = this;
      this.$dragHandle.on('mousedown', _.bind(this.onMouseDown, this));
      this.$doc = $(document);
      this.$win = $(window);
    },

    onMouseDown: function(event) {
      if (event.currentTarget !== this.$dragHandle[0]) {
        return;
      }
      event.preventDefault();
      this._initStart(event);
      this.$doc.on('mousemove', _.bind(this.onMouseMove, this));
      this.$doc.on('mouseup', _.bind(this.onMouseUp, this));
    },

    onMouseMove: function(event) {
      if (!this.isDragging) {
        this._initClone();
        if (this.options.hideDraggable) {
          this.getDraggableElement().hide();
        }
        this.$scrollParent = this.$clone.scrollParent();
        this.isDragging = true;
      }
      this._updateClonePosition(event);

      if (this.options.scroll === true) {
        this._scroll(event);
      }

      if (this.options.dropTargetViews !== null) {
        this.activeDropTargetView = null;

        for (var i = 0, length = this.options.dropTargetViews.length; i < length; i++) {
          if (hitTest(event.pageX, event.pageY, this.options.dropTargetViews[i].$el)) {
            this.activeDropTargetView = this.options.dropTargetViews[i];
            break;
          }
        }
      }

      _.each(this.options.dropTargetViews, function(view) {
        view.$el.trigger('drag-out');
      });

      if (this.activeDropTargetView !== null) {
        if (this.activeDropTargetView.canDrop(this)) {
          this.activeDropTargetView.$el.trigger('drag-over');
        } else {
          this.activeDropTargetView.$el.trigger('drag-over-forbidden');
        }
      }
    },

    onMouseUp: function(event) {
      event.preventDefault();
      var that = this;
      this.$doc.off('mousemove');
      this.$doc.off('mouseup');
      if (this.isDragging) {

        if (this.activeDropTargetView !== null && this.activeDropTargetView.canDrop(this)) {
          this.activeDropTargetView.$el.trigger('dropped', [this]);
          this.activeDropTargetView = null;
          this.$clone.fadeOut(200, _stop);
        } else {
          if (this.options.animateTarget) {
            this.$clone.animate(this._getStopPosition(), parseInt(this.options.animationLength), _stop);
          } else {
            _stop();
          }
        }

        _.each(this.options.dropTargetViews, function(view) {
          view.$el.trigger('drag-out');
        });
      }

      function _stop() {
        that.$clone.remove();
        that.$clone = null;
        if (that.options.hideDraggable) {
          this.getDraggableElement().show();
        }
        that.$scrollParent = null;
        that.isDragging = false;
      }
    },

    getDraggableElement: function() {
      return this.$el;
    },

    _initStart: function(event) {
      this.position = this.$el.position();
      this.startMouse = {
        x: event.pageX,
        y: event.pageY
      };
      this.mouseStartRelativeToElement = {
        x: this.startMouse.x - this.$el.offset().left,
        y: this.startMouse.y - this.$el.offset().top
      };
      this.offset = {
        x: event.pageX - this.position.left,
        y: event.pageY - this.position.top
      };
      this.startPosition = this._getStartPosition();
    },

    _initClone: function() {
      this.$clone = this.$el.clone();
      this.$clone.addClass('dragging');
      this.$clone.css({
        display: 'block',
        width: this.$el.outerWidth(),
        height: this.$el.outerHeight(),
        position: 'fixed',
        zIndex: 10000,
        opacity: this.options.opacity
      });
      this.$el.parent().append(this.$clone);
    },

    _updateClonePosition: function(event) {
      this.$clone.position({
        my: 'left-' + this.mouseStartRelativeToElement.x + ' top-' + this.mouseStartRelativeToElement.y,
        of: event
      });
    },

    _getStartPosition: function() {
      return {
        x: this.offset.x,
        y: this.offset.y
      };
    },

    _getStopPosition: function() {
      return {
        top: this.$el.offset().top - this.$win.scrollTop(),
        left: this.$el.offset().left - this.$el.css('marginLeft').split('px')[0]
      };
    },

    _scroll: function(event) {
      var sParent = this.$scrollParent[0], overflowOffset = this.$scrollParent.offset();
      if (sParent != this.$doc[0] && sParent.tagName != 'HTML') {
        if ((overflowOffset.top + sParent.offsetHeight - event.pageY) < this.options.scrollSensitivity) {
          sParent.scrollTop = sParent.scrollTop + this.options.scrollSpeed;
        } else if (event.pageY - overflowOffset.top < this.options.scrollSensitivity) {
          sParent.scrollTop = sParent.scrollTop - this.options.scrollSpeed;
        }
        if ((overflowOffset.left + sParent.offsetWidth - event.pageX) < this.options.scrollSensitivity) {
          sParent.scrollLeft = sParent.scrollLeft + this.options.scrollSpeed;
        } else if(event.pageX - overflowOffset.left < this.options.scrollSensitivity) {
          sParent.scrollLeft = sParent.scrollLeft - this.options.scrollSpeed;
        }
      } else {
        var $doc = this.$doc, $win = this.$win;
        if (event.pageY - $doc.scrollTop() < this.options.scrollSensitivity) {
          $doc.scrollTop($doc.scrollTop() - this.options.scrollSpeed);
        } else if ($win.height() - (event.pageY - $doc.scrollTop()) < this.options.scrollSensitivity) {
          $doc.scrollTop($doc.scrollTop() + this.options.scrollSpeed);
        }
        if (event.pageX - $doc.scrollLeft() < this.options.scrollSensitivity) {
          $doc.scrollLeft($doc.scrollLeft() - this.options.scrollSpeed);
        } else if ($win.width() - (event.pageX - $doc.scrollLeft()) < this.options.scrollSensitivity) {
          $doc.scrollLeft($doc.scrollLeft() + this.options.scrollSpeed);
        }
      }
    }

  };

  return DraggableMixin;

});