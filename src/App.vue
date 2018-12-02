<template>
  <v-app>
    <Toolbar />

    <v-content>
      <trEnslYtX msg="What would you like to translate?" />
    </v-content>
  </v-app>
</template>

<script>
import trEnslYtX from "./components/trEsnlYtX.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
    name: "App",
    components: {
        Toolbar,
        trEnslYtX,
    },
};
</script>
