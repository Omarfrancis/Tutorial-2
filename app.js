const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },
  methods: {
    changeTitle() {
      this.title = 'Words of Randiance'
    }

  }
})

app.mount('#app')
