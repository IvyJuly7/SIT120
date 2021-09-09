Vue.component('child',{
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: `<div> welocme {{ text }}</div>`
});

new Vue({
  el: '#account',
  data() {
    return {
      message: 'user name'
    }
  }
})