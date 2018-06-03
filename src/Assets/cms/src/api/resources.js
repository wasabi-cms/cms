import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {

  request.headers.set('Accept', 'application/json, text/javascript, */*; q=0.01');
  request.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

  next((response) => {
    if (response.status === 403) {
      global.window.WS.getModule('Wasabi/Core').eventBus.trigger('auth-error');
    }
  });
});

const pagesUrl = global.window.WS.getModule('Wasabi/Cms').options.apiPagesUrl;
const pageResource = Vue.resource(pagesUrl + '{/id}');

let exports = {
  page: {
    create: (page) => {
      return pageResource.save({}, page)
        .then((response) => Promise.resolve(response))
        .catch((error) => Promise.reject(error));
    }
  }
};

export default exports;
