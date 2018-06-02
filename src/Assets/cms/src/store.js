import Vue from 'vue';
import Vuex from 'vuex';
import treeStore from './modules/tree/store';
import resources from './api/resources';

Vue.use(Vuex);

const store = new Vuex.Store({

  modules: {
    tree: treeStore
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    newPage: null
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {
    OPEN_NEW_PAGE_MODAL({commit}, options) {
      commit('SET_NEW_PAGE_OPTIONS', options);
    },

    CLOSE_NEW_PAGE_MODAL({commit}) {
      commit('SET_NEW_PAGE_OPTIONS', null);
    },

    CREATE_PAGE({commit}, title) {
      const params = {
        title: title
      };

      return resources.page.create(params)
        .then((response) => {
          console.log('success', response);
        });
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {
    SET_NEW_PAGE_OPTIONS(state, options) {
      state.newPage = options;
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- GETTERS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  getters: {
    showNewPageModal(state) {
      return state.newPage !== null;
    }
  }

});

export default store;
