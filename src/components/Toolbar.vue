<template>
  <div>
    <v-toolbar
      app
      dark
    >
      <v-toolbar-side-icon
        @click="drawer = !drawer"
      />
      <v-toolbar-title>
        <span>kfa trEnslYtX</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      class="indigo"
    >
      <p>test</p>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
