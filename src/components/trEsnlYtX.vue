<template>
  <v-flex>
    <h1>{{ msg }}</h1>
    <v-textarea
      v-model="searchTerm"
      outline
    />
    <v-flex :style="{ display: 'flex', justifyContent: 'flex-end' }">
      <v-btn @click="getKfa">
        Translate
      </v-btn>
    </v-flex>
    <v-card>
      <v-card-text>
        <pre>
          {{ kfa }}
        </pre>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
import axios from "axios";

export default {
    name: "trEnslYtX",
    props: {
        msg: {
            type: String,
            default: "message missing",
        },
    },
    data: () => ({
        searchTerm: "",
        kfa: "",
    }),
    methods: {
        async getKfa() {
            const result = await axios.get(`http://localhost:8081/translate?english=${encodeURIComponent(this.searchTerm)}`);
            this.kfa = result.data.kfa;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  textarea {
    width: 40rem;
    height: 10rem;
  }
</style>
