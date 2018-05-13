import 'es6-promise/auto';
import Vue from 'vue';
import Vue2TouchEvents from 'vue2-touch-events'

import store from './store';
import AppTree from './modules/tree/App.vue';
import AppTreeActions from './modules/tree-actions/App.vue'

Vue.use(Vue2TouchEvents);

// create an application wide draggableStore to handle draggable data
const draggableStore = {
  dragObject: {},
  dragging: false,
  ghostStyles: {},
  dragOver: {},
  dragBefore: {},
  dragAfter: {},
  dragTarget: {},
  dragTargetEl: null,
  dropMode: 'move'
};

// create app-tree-actions instance
const appTreeActions = new Vue({
  store: store,
  data: {
    draggableStore
  },
  render: h => h(AppTreeActions)
});

// create app-tree instance
const appTree = new Vue({
  store: store,
  data: {
    draggableStore
  },
  render: h => h(AppTree)
});

appTreeActions.$mount('#object-tree-actions');
appTree.$mount('#object-tree');
