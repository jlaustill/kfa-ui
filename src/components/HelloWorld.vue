<template>
  <v-flex align-self-end>
    <h1>{{ msg }}</h1>
    <v-textarea outline v-model="searchTerm"></v-textarea>
    <v-btn v-on:click="getKfa">Translate</v-btn>
    <v-card>
      <v-card-text><pre>{{kfa}}</pre></v-card-text>
    </v-card>
  </v-flex>
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
