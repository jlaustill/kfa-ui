<template>
  <v-container
    class="my-2"
    fluid
  >
    <v-layout row>
      <v-flex xs12>
        <h1>What would you like to translate?</h1>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-textarea
          v-model="searchTerm"
          outline
        />
      </v-flex>
    </v-layout>

    <v-layout
      row
      justify-end
    >
      <v-btn
        @click="getKfa"
      >
        Translate
      </v-btn>
    </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-card class="my-4">
          <v-card-text>
            <pre>
          {{ kfa }}
            </pre>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "trEnslYtX",
  data: () => ({
    searchTerm: "",
    kfa: "",
  }),
  methods: {
    async getKfa() {
      const result = await axios.get(`http://${window.location.hostname}:8081/translate?english=${encodeURIComponent(this.searchTerm)}`);
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
  pre {
    white-space: pre-line;
  }
</style>
