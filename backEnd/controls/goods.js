let db = require('../configs/db')
let sql = require('../sql/sql')
let moment = require('moment')
let func = require('../sql/func')
let path = require('path')

function formateData(rows) {
  return rows.map(row => {
    let date = moment(row.create_time).format('YYY-MM-DD')
    return Object.assign({}, row, {create_time: date})
  })
}

module.exports = {
  fetchAll (req, res) {
    func.connPool(sql.queryAll, 'goods', rows => {
      rows = formateData(rows)
      res.json({code: 200, msg: 'ok', goods: rows[0]})
    })
  },

  fetchOne (req, res) {
    let id = req.body.id
    func.connPool(sql.queryById, ['goods', id], rows => {
      res.send({code: 200, msg: 'ok', goods: row[0]})
    })
  },

  addOne (req, res) {
    let id = req.body.id
    let name = req.body.name
    let price = req.body.price
    let query, arr
    if (id) {
      query = 'UPDATE goods SET name=?, price=? WHERE id=?'
      arr = [name, price, id]
    } else {
      query = 'INSERT INTO goods(name, price) VALUES(?,?)'
      arr = [name, price]
    }
    
    func.connPool(query, arr, rows => {
      res.send({code: 200, msg: 'done'})
    })
  },

  deletOne (req, res) {
    let id = req.body.id
    func.connPool(sql.del, ['goods', id], rows => {
      res.send({code: 200, msg: 'done'})
    })
  }, 

  deleteMulti (req, res) {
    let id = req.body.id

    func.connPool('DELETE FROM goods WHERE id IN ?', [[id]], rows => {
      res.send({code: 200, msg: 'done'})
    })
  }
}
