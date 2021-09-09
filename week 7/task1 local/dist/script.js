const PromptComponent = {
  template:'<div><p>${message}</p><button @click="sayHi">save</button></div>',
  delimiters: ['${','}'],
  data: function() {
    return {
      message: 'click here to save your post!'
    }
  },
  methods: {
    sayHi: function(){
      alert('save draft successful!');
    }
  }
};
let vm = new Vue({
  el:'#draft',
  components: {
    'prompt-component':PromptComponent
  },
  data: {
    num: 1
  },
  template: `<prompt-component/>`
});