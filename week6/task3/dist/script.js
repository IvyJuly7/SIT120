Vue.createApp({
  data() {
    return {
      selected: 'pending',
      options: [
        { text: 'private', value: 'keep your post in personal' },
        { text: 'publish', value: 'publish your post' },
        { text: 'draft', value: 'edit your post later' }
      ]
    }
  }
}).mount('#states')