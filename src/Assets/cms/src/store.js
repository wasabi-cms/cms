import Vue from 'vue';
import Vuex from 'vuex';
import treeStore from './modules/tree/store';

Vue.use(Vuex);

const store = new Vuex.Store({

  modules: {
    tree: treeStore
  }

});

export default store;
