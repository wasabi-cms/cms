import Vue from 'vue';

export default {

  namespaced: true,

  /* --------------------------------------------------------------------------------------------- */
  /* ------------------------------------- INITIAL STATE ----------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  state: {
    objects: [
      {
        id: 'asdfgasrgaqgag-2342324-wsef',
        name: 'Page 1',
        children: [
          {
            id: 'sdrgsergsergsegr-234234-sdfg',
            name: 'Page 2',
            children: [
              {
                id: 'asdfgasrgaqsdfggag-234sdfg2324-wsef',
                name: 'Page 1',
                children: [
                  {
                    id: 'sdsdfgrgsergsergsegr-23sdasdffg4234-sdfg',
                    name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
                    children: []
                  }
                ]
              },
              {
                id: 'srgsearadfhgewsrsdfggewsg-sergsergsergesg-segrseg',
                name: 'Page 3',
                children: []
              },
              {
                id: 'asdfgasrgasdfgqSDFag-2342324-wsef',
                name: 'gnghnfghn fghnfgh nfghn fghnfg hnfghn fghn fghngfhnfghn fghnfg hnfghn fghnfg nh ',
                children: [
                  {
                    id: 'sdrgsersdfggsasdfasdfergsegr-234234-sdfg',
                    name: 'Page 2',
                    children: []
                  }
                ]
              },
              {
                id: 'srgseargewsrsdfggewsg-sergseasdfrgsergesg-segrseg',
                name: 'Page 3',
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 'srgseargewsrgewsg-sersdfggsergsergesg-segrseg',
        name: 'Page 3',
        children: []
      },
      {
        id: 'asdfgasrgaqgag-234sdfg2324-wsef',
        name: 'Page 1',
        children: [
          {
            id: 'sdrgsergsergsegr-23sdasdffg4234-sdfg',
            name: 'Page 2',
            children: []
          }
        ]
      },
      {
        id: 'srgsearadfhgewsrgewsg-sergsergsergesg-segrseg',
        name: 'Page 3',
        children: []
      },
      {
        id: 'asdfgasrgaqSDFag-2342324-wsef',
        name: 'Page 1',
        children: [
          {
            id: 'sdrgsergsasdfasdfergsegr-234234-sdfg',
            name: 'Page 2',
            children: []
          }
        ]
      },
      {
        id: 'srgseargewsrgewsg-sergseasdfrgsergesg-segrseg',
        name: 'Page 3',
        children: []
      }
    ],
    active: null
  },

  /* --------------------------------------------------------------------------------------------- */
  /* ---------------------------------------- ACTIONS -------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  actions: {

  },

  /* --------------------------------------------------------------------------------------------- */
  /* --------------------------------------- MUTATIONS ------------------------------------------- */
  /* --------------------------------------------------------------------------------------------- */
  mutations: {
    SET_ACTIVE(state, object) {
      Vue.set(state, 'active', object);
    }
  }
};
