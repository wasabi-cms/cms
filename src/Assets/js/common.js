require.config({
  config: {
    moment: {
      noGlobal: true
    }
  },
  paths: {
    backbone: '../../../../Core/src/Assets/js/vendor/backbone/backbone',
    marionette: '../../../../Core/src/Assets/js/vendor/marionette/lib/backbone.marionette',
    jquery: '../../../../Core/src/Assets/js/vendor/jquery/dist/jquery',
    purl: '../../../../Core/src/Assets/js/vendor/purl/purl',
    underscore: '../../../../Core/src/Assets/js/vendor/underscore/underscore',
    'jquery.color': '../../../../Core/src/Assets/js/vendor/jquery-color/jquery.color',
    'jquery.eventMagic': '../../../../Core/src/Assets/js/common/jquery-plugins/jquery.eventMagic',
    'jquery.scrollParent': '../../../../Core/src/Assets/js/common/jquery-plugins/jquery.scrollParent',
    'jquery.livequery': '../../../../Core/src/Assets/js/common/jquery-plugins/jquery.livequery',
    'jquery.nSortable': '../../../../Core/src/Assets/js/common/jquery-plugins/jquery.nSortable',
    'jquery.tSortable': '../../../../Core/src/Assets/js/common/jquery-plugins/jquery.tSortable',
    'jquery.position': '../../../../Core/src/Assets/js/common/jquery-plugins/jquery.position',
    'bootstrap.collapse': '../../../../Core/src/Assets/js/vendor/bootstrap/js/collapse',
    'bootstrap.dropdown': '../../../../Core/src/Assets/js/vendor/bootstrap/js/dropdown',
    'bootstrap.transition': '../../../../Core/src/Assets/js/vendor/bootstrap/js/transition',
    'wasabi': '../../../../Core/src/Assets/js/wasabi',
    'wasabi.cms': './cms',
    'wasabi.cms.package': './',
    'common/BaseView': '../../../../Core/src/Assets/js/common/BaseView',
    'common/DialogView': '../../../../Core/src/Assets/js/common/DialogView',
    'common/BaseViewFactory': '../../../../Core/src/Assets/js/common/BaseViewFactory'
  },
  shim: {
    backbone: [
      'underscore',
      'jquery'
    ],
    marionette: [
      'backbone'
    ],
    'bootstrap.dropdown': [
      'jquery'
    ],
    'bootstrap.collapse': [
      'jquery',
      'bootstrap.transition'
    ],
    'jquery.tooltipster': [
      'jquery'
    ],
    'jquery.color': [
      'jquery'
    ],
    'jquery.livequery': [
      'jquery'
    ],
    'jquery.resize': [
      'jquery'
    ],
    'jquery.perfectScrollbar': [
      'jquery'
    ],
    'jquery.nSortable': [
      'jquery'
    ],
    'jquery.tSortable': [
      'jquery'
    ],
    'jquery.position': [
      'jquery'
    ]
  }
});

// removed in production by uglify
if (typeof DEBUG === 'undefined') {
  DEBUG = true;
}
