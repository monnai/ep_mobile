import req from './ceshi'

export const GETTREEDATA = function (e) {
  return req('post', '/251280/123', { qwe: e })
}
export const three = function (e) {
  return req('get', '/251280/12345?qwe=' + e) // get方法以及传参      qwe是字段   e是参数
}
