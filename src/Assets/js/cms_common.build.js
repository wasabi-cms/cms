require.config({
  config: {
    moment: {
      noGlobal: true
    }
  },
  paths: {
    backbone: '../../../../core/src/Assets/js/vendor/backbone/backbone',
    marionette: '../../../../core/src/Assets/js/vendor/marionette/lib/backbone.marionette',
    jquery: '../../../../core/src/Assets/js/vendor/jquery/dist/jquery',
    purl: '../../../../core/src/Assets/js/vendor/purl/purl',
    underscore: '../../../../core/src/Assets/js/vendor/underscore/underscore',
    'jquery.color': '../../../../core/src/Assets/js/vendor/jquery-color/jquery.color',
    'jquery.eventMagic': '../../../../core/src/Assets/js/common/jquery-plugins/jquery.eventMagic',
    'jquery.scrollParent': '../../../../core/src/Assets/js/common/jquery-plugins/jquery.scrollParent',
    'jquery.livequery': '../../../../core/src/Assets/js/common/jquery-plugins/jquery.livequery',
    'jquery.nSortable': '../../../../core/src/Assets/js/common/jquery-plugins/jquery.nSortable',
    'jquery.tSortable': '../../../../core/src/Assets/js/common/jquery-plugins/jquery.tSortable',
    'jquery.position': '../../../../core/src/Assets/js/common/jquery-plugins/jquery.position',
    'bootstrap.collapse': '../../../../core/src/Assets/js/vendor/bootstrap/js/collapse',
    'bootstrap.dropdown': '../../../../core/src/Assets/js/vendor/bootstrap/js/dropdown',
    'bootstrap.transition': '../../../../core/src/Assets/js/vendor/bootstrap/js/transition',
    'wasabi': '../../../../core/src/Assets/js/wasabi',
    'common/BaseView': '../../../../core/src/Assets/js/common/BaseView',
    'common/DialogView': '../../../../core/src/Assets/js/common/DialogView',
    'common/BaseViewFactory': '../../../../core/src/Assets/js/common/BaseViewFactory',
    'wasabi.cms': './cms',
    'wasabi.cms.package': './',
    'medium': './vendor/medium-editor/dist/js/medium-editor'
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

if (typeof DEBUG === 'undefined') {
  DEBUG = true;
}
