import axios from 'axios';

const baseUrl = global.window.WS.getModule('Wasabi/Cms').options.apiBaseUrl;

const http = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
  headers: {
    'Accept': 'application/json, text/javascript, */*; q=0.01',
    'X-Requested-With': 'XMLHttpRequest'
  }
});

http.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response.status === 403) {
      global.window.WS.getModule('Wasabi/Core').eventBus.trigger('auth-error');
    }

    return Promise.reject(error);
  }
);

export default http;
