const UserName = {
  props: {
    title: String,
    subtitle: String
  },
  template: `
    <input 
      type="text"
      :value="title"
      @input="$emit('update:title', $event.target.value)">

    <input
      type="text"
      :value="subtitle"
      @input="$emit('update:subtitle', $event.target.value)">
  `
};

const HelloVueApp = {
  components: {
    UserName,
  },
  data() {
    return {
      title: 'yourtitle',
      subtitle: 'yoursubtitle',
    };
  },
};

Vue.createApp(HelloVueApp).mount('#posttitle')