const PromptComponent = {
  template:'<div><p>${message}</p><button @click="sayHi">say Hi!</button></div>',
  delimiters: ['${','}'],
  data: function() {
    return {
      message: 'say hi test'
    }
  },
  methods: {
    sayHi: function(){
      alert('hi test');
    }
  }
};
let vm = new Vue({
  el:'#app',
  components: {
    'prompt-component':PromptComponent
  },
  data: {
    num: 1
  },
  template: `<prompt-component/>`
});