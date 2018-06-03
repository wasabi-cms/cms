import Vue from 'vue';
import Vuex from 'vuex';
import treeStore from './modules/tree/store';
import pageResource from './api/pageResource';

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

    GET_PAGES({commit}) {
      return pageResource.list()
        .then((response) => {
          const data = response.data.data;

          const rootNode = data.rootNode;
          const nodes = data.nodes;

          commit('tree/SET_NODES', nodes);
          commit('tree/SET_ROOT_NODE', rootNode);
        });
    },

    CREATE_PAGE({commit, dispatch, state}, title) {
      const params = {
        ...state.newPage,
        title
      };

      return pageResource.create(params)
        .then((response) => {
          const data = response.data.data;

          dispatch('tree/SCROLL_INTO_VIEW', data.page.id);

          commit('tree/ADD_OR_UPDATE_NODE', data.page);

          if (data.childNodes.length > 0) {
            const childNodes = [];
            data.childNodes.forEach((node) => {
              commit('tree/ADD_OR_UPDATE_NODE', node);
              childNodes.push(node.id);
            });

            if (data.updateChildNodesOf === null) {
              commit('tree/SET_ROOT_NODE_CHILDREN', childNodes);
            } else {
              commit('tree/SET_NODE_CHILDREN', {context: data.updateChildNodesOf, children: childNodes});
            }
          }

          dispatch('tree/SELECT_NODE', data.page.id);
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
