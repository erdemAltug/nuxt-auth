<template>
  <v-container>
    <h1>Login</h1>
    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
    <v-snackbar color="error" v-model="snackbar" :timeout="timeout">
      {{ text }}
    </v-snackbar>
  </v-container>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    UserAuthForm,
  },
  data: () => ({
    snackbar: false,
    text: "Wrong Mail or Password",
    timeout: 3000,
  }),
  computed: {
    ...mapState(["loggedIn"]),
  },

  methods: {
    ...mapActions(["setLogin"]),

    loginUser(logininfo) {
      if (
        logininfo.email == "test@gmail.com" &&
        logininfo.password == "12345678"
      ) {
        this.setLogin(true);
        this.$router.push({ path: "/" });
      } else {
        this.snackbar = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
