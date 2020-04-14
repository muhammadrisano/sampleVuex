<template>
  <div id="app">
    <h1>Post App</h1>
    <ul>
      <li v-for="post in  posts" :key="post.id"> {{post.title}}</li>
    </ul>
      <h2>countnya adalah {{count}}</h2>
      <input type="text" v-model="newCount">
      <button @click="addCount">Add</button>
  </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      newCount: 0
      // count: this.$store.state.count
    }
  },
  computed: {
    // postValidate () {
    //   return this.$store.getters.postValidate
    // },
    ...mapState({
      countvuex: state => state.count,
      token: state => state.token
    }),
    count () {
      return this.$store.state.count
    },
    posts () {
      return this.$store.state.posts
    }
  },
  methods: {
    addCount () {
      // alert('hello')
      this.$store.dispatch('increment', this.newCount)
    }
  },
  mounted () {
    this.$store.dispatch('getPost')
    console.log(this.token)
  }
}
</script>

<style>
</style>
