<template>
  <div class="main">
    <h1>Form</h1>
    
  </div>
</template>

<script>
import {getList, deleteList} from '../utils/api' 
export default {
  name: 'Form',
  data () {
    return {
      form: null
    }
  },
  methods: {
  },
  created() {
    let id = this.$route.query.id
    console.log(id)
    if (id) {
      getDetail({id}, res => {
        this.form = res.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{

}
</style>
