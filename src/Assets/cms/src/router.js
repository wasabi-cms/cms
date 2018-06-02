import Vue from 'vue';
import VueRouter from 'vue-router';
import ContentIndex from './modules/content/views/ContentIndex.vue';
import PageEdit from './modules/content/views/PageEdit.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'content-index',
    components: {
      default: ContentIndex
    }
  },
  {
    path: '/page/:id',
    name: 'page-edit',
    components: {
      default: PageEdit
    }
  }
];

const router = new VueRouter({
  routes,
  base: global.window.WS.getModule('Wasabi/Cms').options.baseUrl,
  mode: 'history'
});

export default router;
