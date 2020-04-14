<template>
<div>
  <Navbar/>
<div class="container">
  {{fullname}}
  <div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="text" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <BoxButton @terserah="handleLogin" @inputData="inputFullname"/>
  </div>
  </div>
  </div>
</template>
<script>

import Navbar from '../components/navbar'
import BoxButton from '../components/BoxButton'
import Footer from '../components/Footer'

export default {
  name: 'Login',
  components: {
    Navbar,
    BoxButton
  },
  mixins: [Footer],
  data () {
    return {
      username: '',
      password: '',
      fullname: ''
    }
  },
  methods: {
    inputFullname (e) {
      this.fullname = e
    },
    handleLogin (data) {
      alert(data)
      this.$store.dispatch('handleLogin', { email: this.username, password: this.password }).then((res) => {
        this.$router.push('/')
      })
    }
  },
  mounted () {
    this.editdata1()
  }
}
</script>
<style scoped>

</style>
