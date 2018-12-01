<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <textarea v-model="searchTerm"></textarea>
    <button v-on:click="getKfa">Translate</button>
    <pre>{{kfa}}</pre>
  </div>
</template>

<script>
  import axios from 'axios';

export default {
  name: 'HelloWorld',
  data: function () {
    return {
      searchTerm: '',
      kfa: ''
    }
  },
  methods: {
    getKfa: function () {
      axios.get('http://localhost:8081/translate?english=' + encodeURIComponent(this.searchTerm)).then(result => {
        this.kfa = result.data.kfa;
      })
      // this.kfa = "worked!";
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea {
    width: 40rem;
    height: 10rem;
  }
  button {
    display: block;
  }
</style>
