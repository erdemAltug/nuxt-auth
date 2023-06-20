<template>
  <v-app dark>
    <v-app-bar app color="green">
      <div>
        <h1>Cat App</h1>
      </div>

      <v-spacer></v-spacer>

      <div v-if="loggedIn">
        <v-btn>test@gmail.com</v-btn>
        <v-btn @click="logout()"> Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/Login">Login</v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>

    <v-snackbar color="success" v-model="snackbar" :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "DefaultLayout",
  data() {
    return {
      snackbar: false,
      text: "Succesfully Logged In",
      timeout: 3000,
      fixed: false,
    };
  },

  computed: {
    ...mapState(["loggedIn"]),
  },

  watch: {
    loggedIn() {
      if (this.loggedIn == true) {
        this.snackbar = true;
      }
    },
  },
  methods: {
    ...mapActions(["setLogin"]),

    logout() {
      this.$router.push({ path: "/Login" });
      this.setLogin(false);
    },
  },
};
</script>
