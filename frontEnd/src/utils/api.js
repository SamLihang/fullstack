import axios from 'axios'
const host = '/api'
const ajaxGet = (api, cb) => {
    axios.get(host + api)
      .then(cb)
      .catch(err => {
        console.log(err)
      })
  }
const ajaxPost = (api, post, cb) => {
  console.log('请求：', api, post)
    axios.post(host + api, post)
      .then(cb)
      .catch(err => {
        console.log(err)
      })
  }

export const getList = (cb)=>{
  ajaxGet(getListUrl, cb)
}
export const deleteList = (data, cb) => {
  ajaxPost(deleteListUrl, data, cb)
}
export const getDetail = (data, cb) => {
  ajaxPost(getDetailUrl, data, cb)
}
export const login = (data, cb) => {
  ajaxPost(getLoginUrl, data, cb)
}
export const register = (data, cb) => {
  ajaxPost(getRegisterUrl, data, cb)
}


const getListUrl = '/goods/getList'
const deleteListUrl = '/goods/deleteList'
const getDetailUrl = '/goods/getDetail'
const getLoginUrl = '/user/login'
const getRegisterUrl = '/user/register'