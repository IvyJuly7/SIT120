Vue.component('child',{
  props: {
    text: {
      type: String,
      required: true
    }
  },
  template: `<div>{{ text }}</div>`
});

new Vue({
  el: '#app',
  data() {
    return {
      message: 'hello mr. VUE'
    }
  }
})