import router from '../router'

export const BadRequest = 400
export const Unauthorized = 401
export const Forbidden = 403
export const NotFound = 404

export const onUnauthorized = (response) => {
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


// export const review = {
//   fetch(playload) {
//     return request('get', `/api/reviews/${playload.itemId}?page=${playload.page}&size=5&sort=id,DESC`)
//   },
//   fetchManager(playload) {
//     return request('get', `/api/reviews?page=${playload.page}&size=10&sort=id,DESC`)
//   },
//   fetchManagerSearch(playload) {
//     return request('get', `/api/reviews/manager/${playload.option}/${playload.keyword}?page=${playload.page}&size=10&sort=id,DESC`)
//   },
//   create(playload) {
//     return request('post', `/api/reviews/${playload.itemId}`, playload.review)
//   },
//   createFiles(playload) {
//     return requestFile('post', '/api/reviews/files', playload)
//   }
// }



