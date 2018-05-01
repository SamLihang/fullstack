import axios from 'axios'
const host = 'http://localhost:9999/api/goods'
const ajaxGet = (api, cb) => {
    axios.get(host + api)
      .then(cb)
      .catch(err => {
        console.log(err)
      })
  }
const ajaxPost = (api, post, cb) => {
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


const getListUrl = '/getList'
const deleteListUrl = '/deleteList'
const getDetailUrl = '/getDetail'