import 'es6-promise/auto';
import Vue from 'vue';

import Vue2TouchEvents from 'vue2-touch-events'
Vue.use(Vue2TouchEvents);

import {sync} from 'vuex-router-sync';
import store from './store';
import router from './router';
import AppTree from './modules/tree/App.vue';
import AppTreeActions from './modules/tree-actions/App.vue'
import AppContent from './modules/content/App.vue';

sync(store, router);

// create an application wide draggableStore to handle draggable data
const draggableStore = {
  dragComponent: null,
  dragging: false,
  ghostStyles: {},
  dragOverComponent: null,
  dragBeforeComponent: null,
  dragAfterComponent: null,
  dragTargetComponent: null,
  dropMode: 'move',
  title: ''
};

// create app-tree-actions instance
const appTreeActions = new Vue({
  store: store,
  data: {
    draggableStore: draggableStore
  },
  render: h => h(AppTreeActions)
});

// create app-tree instance
const appTree = new Vue({
  store: store,
  router: router,
  data: {
    draggableStore: draggableStore
  },
  render: h => h(AppTree),
  computed: {
    isDragging() {
      return this.draggableStore.dragging;
    }
  },
  watch: {
    isDragging(val) {
      if (val) {
        document.body.classList.add('draggable--is-dragging');
      } else {
        document.body.classList.remove('draggable--is-dragging');
      }
    }
  }
});

const appContent = new Vue({
  store: store,
  data: {

  },
  router: router,
  render: h => h(AppContent)
});

appTreeActions.$mount('#object-tree-actions');
appTree.$mount('#object-tree');
appContent.$mount('#cms-content');
