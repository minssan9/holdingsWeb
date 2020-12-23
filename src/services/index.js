import axios from 'axios'
import router from '../router'
import qs from 'qs'
import authRequest from '@/services/auth'


const DOMAIN = '/api'

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404

export const onUnauthorized = () => {
  router.push(`/login?returnPath=${encodeURIComponent(location.pathname)}`)
  throw Error(response)
}
export const onForbidden = (response) => {
  alert('권한이 없습니다.')
  router.push('/')
  throw Error(response)
}

export const onBadRequest = (response) => {
  alert('잘못된요청입니다.')
  throw Error(response)
}

export  const onNotFound = (response) => {
  alert('잘못된 접근입니다.')
  throw Error(response)
}
export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,

  }).then(result => result)
    .catch(error => error.response)
}

export const requestFile = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
    processData: false,
    contentType: false

  }).then(result => result)
    .catch(error => error.response)
}
  

export const review = { 
  fetch(playload) {
    return request('get', `/api/reviews/${playload.itemId}?page=${playload.page}&size=5&sort=id,DESC`)
  },
  fetchManager(playload) {
    return request('get', `/api/reviews?page=${playload.page}&size=10&sort=id,DESC`)
  },
  fetchManagerSearch(playload) {
    return request('get', `/api/reviews/manager/${playload.option}/${playload.keyword}?page=${playload.page}&size=10&sort=id,DESC`)
  },
  create(playload) {
    return request('post', `/api/reviews/${playload.itemId}`, playload.review)
  },
  createFiles(playload) {
    return requestFile('post', '/api/reviews/files', playload)
  }
} 



