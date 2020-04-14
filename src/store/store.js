import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

axios.defaults.headers.common.authorization = 'jangan-coba-coba'
export const store = new Vuex.Store({
  state: {
    conut2: 1,
    count: 10,
    posts: null,
    token: localStorage.getItem('token') || null
  },
  getters: {
    // postValidate (state) {
    //   return state.posts.filter((item) => {
    //     return item.validate === true
    //   })
    // }
    isLogin (state) {
      return state.token !== null
    }
  },
  mutations: {
    increment (state, n) {
      state.count += parseInt(n)
    },
    editPost (state, data) {
      state.posts = data
    },
    addToken (state, token) {
      state.token = token
    }
  },
  actions: {
    handleLogin (context, data) {
      return new Promise((resolve, reject) => {
        // axios.defaults.baseURL =
        axios.post(`${process.env.VUE_APP_API}/user/login`, data)
          .then((res) => {
            context.commit('addToken', res.data.result.token)
            localStorage.setItem('token', res.data.result.token)
            resolve(res)
          })
          .catch((err) => reject(err))
      })
      // eslint-disable-next-line dot-notation
    },
    increment (context, n) {
      setTimeout(() => {
        const data = parseInt(n * 10)
        context.commit('increment', data)
      }, 3000)
    },
    getPost (context) {
      console.log(context.state.count)
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
          context.commit('editPost', res.data)
        })
    }
  }
})
