// pages/login/index.vue

<template>
  <v-container class="text-center">
    <v-card style="justify-content: center">
      <v-card-title style="justify-content: center"
        ><h1>Kitty</h1></v-card-title
      >
      <v-card height="700px" class="mt-8" justify-center align-center>
        <v-img
          class="fade-in-image"
          style="margin-left: auto; margin-right: auto"
          cover
          :src="src"
          height="500px"
          width="600px"
        >
        </v-img>
        <v-card-actions>
          <v-row>
            <v-col>
              <v-btn color="primary" class="mt-8" @click="fetchCat()"
                >Change Cat</v-btn
              >
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import UserAuthForm from "@/components/UserAuthForm";
import SnackBar from "@/components/snackBar";

export default {
  components: { UserAuthForm, SnackBar },
  data: () => ({
    valid: false,
    email: "",
    password: "",
    cat: [],
    src: "",
    snackbarMessage: "",
  }),
  computed: {
    finish() {
      return this.form.finish;
    },
  },
  
  // watch: {
  //   src() {
  //     console.log("src", this.src);
  //   },
  // },

  mounted() {
    this.fetchCat();
  },
  methods: {
    async fetchCat() {
      this.src = "";
      fetch(
        `https://api.thecatapi.com/v1/images/search?api_key=live_h335TpmRnjtKp6bFMyKoXpJATAHGu2ePd4Dew2tlWRTyxajeXed4VDoCOj5F0yxf`
      )
        .then((res) =>
          res.json().then((response) => (this.src = response[0].url))
        )
        .catch((err) => console.log("error", err));
    },
  },
};
</script>

<style>
.fade-in-image {
  animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
}
</style>
