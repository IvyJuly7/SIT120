Vue.component('prompt-compo', {
  template: '<div><p>${message}</p><button @click="sayHi">publish</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      message: 'click here to publish!'
    }
  },
  methods: {
    sayHi: function() {
      alert('publish successful!');
    }
  }
});

let vm = new Vue({
  el:'#publish',
  template: `<prompt-compo/>`
});