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
        <span>kfE trEnslYtX (qwerty phonetic alphabet => kwxti fAnetIk ElfAbet => kfE)</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      app
      dark
    >
      <v-list>
        <v-list-tile
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-tile-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      drawer: false,
      links: [
        { icon: "dashboard", text: "trEnslYtX", route: "/" },
        { icon: "info", text: "About kfa", route: "/about" },
      ],
    };
  },
};
</script>
