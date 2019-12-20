import axios from 'axios';

// export const SERVER = '64d3edfb.ngrok.io';
export const SERVER = 'match-lunch-back.herokuapp.com';
export const SERVER_URL = 'https://' + SERVER;
export const WS_SERVER_URL = 'wss://' + SERVER;

export const routes = {
  auth: '/auth',
  ip: '/ip'
};

export const request = (route, method, data) => {
  const headers = {
    'content-type': 'application/x-www-form-urlencoded',
  };

  return axios({
    url: `${SERVER_URL}${route}`,
    method,
    headers,
    data: method === 'POST' ? data : null,
  })
    .then((response) => {
      return { data: response.data, status: response.status };
    })
    .catch(error => {
      console.log('API request error:\n', error);

      return { type: 'error' };
    });
};
