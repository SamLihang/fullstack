let db = require('../configs/db')
let sql = require('../sql/sql')
let func = require('../sql/func')
let path = require('path')

Date.prototype.format = function(format)
{
 var o = {
 "M+" : this.getMonth()+1, //month
 "d+" : this.getDate(),    //day
 "h+" : this.getHours(),   //hour
 "m+" : this.getMinutes(), //minute
 "s+" : this.getSeconds(), //second
 "q+" : Math.floor((this.getMonth()+3)/3),  //quarter
 "S" : this.getMilliseconds() //millisecond
 }
 if(/(y+)/.test(format)) format=format.replace(RegExp.$1,
 (this.getFullYear()+"").substr(4 - RegExp.$1.length));
 for(var k in o)if(new RegExp("("+ k +")").test(format))
 format = format.replace(RegExp.$1,
 RegExp.$1.length==1 ? o[k] :
 ("00"+ o[k]).substr((""+ o[k]).length));
 return format;
}

module.exports = {
  login (req, res) {
    let name = req.body.name
    let password = req.body.password
    let query = 'SELECT * From user WHERE user_name=? limit 1'
    func.connPool(query, [name], rows => {
      if(!rows.length) {
        res.json({code: 400, msg: '用户名不存在'})
        return 
      }
      if(rows[0].password === password){
        res.json({code: 200, msg: 'ok'})
        return
      }else{
        res.json({code: 400, msg: '密码不正确'})
        return 
      }
    })
  },

  register (req, res) {
    let name = req.body.name
    let password = req.body.password
    let nowTime = new Date().format("yyyy-MM-dd hh:mm")
    let query = 'SELECT * From user WHERE user_name=? limit 1'
    func.connPool(query, [name], rows => {
      if(rows.length){
        res.json({code: 400, msg: '用户名已存在'})
        return
      }
      query = `INSERT INTO user(user_name, password, role, create_time, update_time) VALUES('${name}', '${password}', '1', '${nowTime}', '${nowTime}')`
      func.connPool(query,[], rows => {
        if(rows.affectedRows){
          res.json({code: 200, msg: 'ok'})
        }else{
          res.json({code: 400, msg: '注册失败'})
        }
      })
    })
  }
}
