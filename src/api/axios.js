import axios from 'axios'
import { Message } from 'iview';
import { BASE_URL } from '../config'

axios.defaults.timeout = 30000;
axios.defaults.baseURL = BASE_URL;

axios.interceptors.request.use(config => {
    config.data = JSON.stringify(config.data);
    console.log(config.data);
    config.headers = {
      "Content-Type":'application/x-www-from-urlencoded',
    };
    return config
  },
  error => {
    console.log('err'+error);
    Message({
      Message:error.message,
      type:'error',
      duration:5*1000
    });
    return Promise.reject(error)
  }
);

axios.interceptors.response.use( response =>{
  response.data = JSON.stringify(response.data);
  console.log('response:'+response.data);
  return response;
}, error => {
  console.log('err'+error);
  Message({
    Message:error.message,
    type:'error',
    duration:5*1000
  });
  return Promise.reject(error)
});

export function axiosGet(url,params = {}) {
  return new Promise(((resolve, reject) => {
    axios.get(url,{
      params:params
    }).then(response =>{
      resolve(response.data)
    }).catch(err =>{
      reject(err)
    })
  }))
}

export function axiosPost(url,data={}) {
  return new Promise((resolve, reject) => {
    axios.post(url,data).then(response => {
      resolve(response.data);
    }),err =>{
      reject(err)
    }
  })
}
