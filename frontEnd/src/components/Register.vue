<template>
  <div class="main">
    <h1>Register</h1>   
    <form>
      <input type="text" placeholder="账号" v-model="name">
      <input type="password" placeholder="密码" v-model="password">
      <button @click="login">注册</button>
    </form> 
  </div>
</template>

<script>
import { register } from '../utils/api'
export default {
  name: 'Login',
  data () {
    return {
      name: null,
      password: null,
    }
  },
  methods: {
    login(){
      register({name: this.name, password: this.password}, res => {
        if (res.data.code === 200){
          alert('注册成功')
          this.$router.push('/login')
        } else {
          alert(res.data.msg)
        }
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{

}
</style>
