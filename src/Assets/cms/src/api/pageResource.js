import http from './http';

export default {
  list: () => {
    return http.get('/pages');
  },

  create: (page) => {
    return http.post('/pages', page);
  }
}
