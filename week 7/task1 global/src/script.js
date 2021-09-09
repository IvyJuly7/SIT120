Vue.component('prompt-compo', {
  template: '<div><p>${message}</p><button @click="sayHi">say Hi!</button></div>',
  delimiters: ['${','}'],
  data: function(){
    return {
      message: 'Hi , test'
    }
  },
  methods: {
    sayHi: function() {
      alert('Hi');
    }
  }
});

let vm = new Vue({
  el:'#app',
  template: `<prompt-compo/>`
});