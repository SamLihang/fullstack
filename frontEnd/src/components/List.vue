<template>
  <div class="main">
    <h1>List</h1>  
    <h5>{{tableData}}</h5>  
  </div>
</template>

<script>
import {getList, deleteList} from '../utils/api' 
export default {
  name: 'List',
  data () {
    return {
      tableData: null,
    }
  },
  methods: {
    handleDelete (row) {
      deleteList({id: row.Id}, res => {
        if (res.status === 201) {
          let index = this.tableData.indexOf(row)
          this.tableData.splice(index, 1)
          console.log('删除成功')
        }
      })
    },
    handleEdit (row) {
      this.$router.push({name: 'form', query: {id: row.Id}})
    }
  },
  created() {
    console.log(1212121)
    getList(res => {
      console.log(res)
      this.tableData = res.data
      console.log(res.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{

}
</style>
