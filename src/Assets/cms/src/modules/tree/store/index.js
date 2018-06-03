import Vue from 'vue';
import router from '../../../router';

export default {

  namespaced: true,

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    rootNode: {},
    nodes: {},
    scrollIntoView: null
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {

    SELECT_NODE({commit, getters}, node) {
      if (typeof node !== 'object') {
        node = getters.getNodeById(node);
      }
      if (node.root === true) {
        router.push({ name: 'content-index' });
      } else {
        router.push({ name: 'page-edit', params: {id: node.id} });
      }
    },

    SCROLL_INTO_VIEW({commit}, nodeId) {
      commit('SET_SCROLL_INTO_VIEW', nodeId);
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {

    SET_ROOT_NODE(state, rootNode) {
      state.rootNode = rootNode;
    },

    SET_NODES(state, nodes) {
      nodes.forEach(node => {
        Vue.set(state.nodes, node.id, node);
      });
    },

    ADD_OR_UPDATE_NODE(state, node) {
      if (typeof state.nodes[node.id] !== 'undefined') {
        Vue.set(state.nodes, node.id, Object.assign({}, state.nodes[node.id], node));
      } else {
        node.children = node.children || [];
        Vue.set(state.nodes, node.id, node);
      }
    },

    SET_ROOT_NODE_CHILDREN(state, children) {
      Vue.set(state.rootNode, 'children', children);
    },

    SET_NODE_CHILDREN(state, {context, children}) {
      Vue.set(state.nodes[context], 'children', children);
    },

    SET_SCROLL_INTO_VIEW(state, nodeId) {
      state.scrollIntoView = nodeId;
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- GETTERS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  getters: {

    getNodeById: (state) => (id) => {
      return state.nodes[id];
    },

    getActiveNode(state, getters, rootState) {
      if (['content-index', 'page-new', 'page-new-at-position'].indexOf(rootState.route.name) !== -1) {
        return state.rootNode;
      }
      if (['page-edit', 'page-new-in-parent', 'page-new-in-parent-at-position'].indexOf(rootState.route.name) !== -1) {
        return getters.getNodeById(rootState.route.params.id);
      }
    },
    scrollIntoView(state) {
      return state.scrollIntoView;
    }
  }
};
