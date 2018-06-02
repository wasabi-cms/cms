import router from '../../../router';

export default {

  namespaced: true,

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    rootNode: {
      name: 'Wasabi CMS Site',
      root: true,
      children: [
        // 'asdfgasrgaqgag-2342324-wsef',
        // 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg',
        // 'asdfgasrgaqgag-234sdfg2324-wsef',
        // 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg',
        // 'asdfgasrgaqSDFag-2342324-wsef',
        // 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg'
      ]
    },
    nodes: {
      // 'asdfgasrgaqgag-2342324-wsef': {
      //   id: 'asdfgasrgaqgag-2342324-wsef',
      //   parentId: null,
      //   name: 'Page 1',
      //   children: [
      //     'sdrgsergsergsegr-234234-sdfg'
      //   ]
      // },
      // 'sdrgsergsergsegr-234234-sdfg': {
      //   id: 'sdrgsergsergsegr-234234-sdfg',
      //   parentId: 'asdfgasrgaqgag-2342324-wsef',
      //   name: 'Page 2',
      //   children: [
      //     'asdfgasrgaqsdfggag-234sdfg2324-wsef',
      //     'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg',
      //     'asdfgasrgasdfgqSDFag-2342324-wsef',
      //     'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg'
      //   ]
      // },
      // 'asdfgasrgaqsdfggag-234sdfg2324-wsef': {
      //   id: 'asdfgasrgaqsdfggag-234sdfg2324-wsef',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'Page 1',
      //   children: [
      //     'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg'
      //   ]
      // },
      // 'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg': {
      //   id: 'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg',
      //   parentId: 'asdfgasrgaqsdfggag-234sdfg2324-wsef',
      //   name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
      //   children: []
      // },
      // 'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg': {
      //   id: 'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'Page 3',
      //   children: []
      // },
      // 'asdfgasrgasdfgqSDFag-2342324-wsef': {
      //   id: 'asdfgasrgasdfgqSDFag-2342324-wsef',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
      //   children: [
      //     'sdrgsersdfggsasdfasdfergsegr-234234-sdfg'
      //   ]
      // },
      // 'sdrgsersdfggsasdfasdfergsegr-234234-sdfg': {
      //   id: 'sdrgsersdfggsasdfasdfergsegr-234234-sdfg',
      //   parentId: 'asdfgasrgasdfgqSDFag-2342324-wsef',
      //   name: 'Page 2',
      //   children: []
      // },
      // 'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg': {
      //   id: 'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg',
      //   parentId: 'sdrgsergsergsegr-234234-sdfg',
      //   name: 'Page 3',
      //   children: []
      // },
      // 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg': {
      //   id: 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg',
      //   parentId: null,
      //   name: 'Page 3',
      //   children: []
      // },
      // 'asdfgasrgaqgag-234sdfg2324-wsef': {
      //   id: 'asdfgasrgaqgag-234sdfg2324-wsef',
      //   parentId: null,
      //   name: 'Page 1',
      //   children: [
      //     'sdrgsergsergsegr-23sdasdffg4234-sdfg'
      //   ]
      // },
      // 'sdrgsergsergsegr-23sdasdffg4234-sdfg': {
      //   id: 'sdrgsergsergsegr-23sdasdffg4234-sdfg',
      //   parentId: 'asdfgasrgaqgag-234sdfg2324-wsef',
      //   name: 'Page 2',
      //   children: []
      // },
      // 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg': {
      //   id: 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg',
      //   parentId: null,
      //   name: 'Page 3',
      //   children: []
      // },
      // 'asdfgasrgaqSDFag-2342324-wsef': {
      //   id: 'asdfgasrgaqSDFag-2342324-wsef',
      //   parentId: null,
      //   name: 'Page 1',
      //   children: [
      //     'sdrgsergsasdfasdfergsegr-234234-sdfg'
      //   ]
      // },
      // 'sdrgsergsasdfasdfergsegr-234234-sdfg': {
      //   id: 'sdrgsergsasdfasdfergsegr-234234-sdfg',
      //   parentId: 'asdfgasrgaqSDFag-2342324-wsef',
      //   name: 'Page 2',
      //   children: []
      // },
      // 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg': {
      //   id: 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg',
      //   parentId: null,
      //   name: 'Page 3',
      //   children: []
      // }
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {
    SELECT_NODE({commit}, node) {
      if (node.root === true) {
        router.push({ name: 'content-index' });
      } else {
        router.push({ name: 'page-edit', params: {id: node.id} });
      }
    }
  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {

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
    }
  }
};
