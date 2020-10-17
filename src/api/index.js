import request from '../utils/request'

// test
export const test = (data) => request({
  url: '/url/test',
  method: 'post',
  data
})
