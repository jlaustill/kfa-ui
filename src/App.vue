<template>
  <v-app>
    <Toolbar />

    <v-content class="mx-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "App",
  components: {
    Toolbar,
  },
};
</script>
