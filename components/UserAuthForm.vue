<template>
  <v-row class="mt-16" style="justify-content: center">
    <v-col  cols="4"> 
      <v-form v-model="valid">
        <v-text-field
          v-model="userInfo.name"
          label="Name"
          :rules="[required('name')]"
          v-if="hasName"
        />

        <v-text-field
          v-model="userInfo.email"
          label="Email"
          :rules="[required('email'), emailFormat()]"
        />

        <v-text-field
          v-model="userInfo.password"
          label="Password"
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          counter="true"
          :rules="[required('password'), minLength('password', 8)]"
        />

        <v-btn @click="submitForm(userInfo)" :disabled="!valid">{{
          buttonText
        }}</v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
import validations from "@/utils/validations";

export default {
  data() {
    return {
      valid: false,
      showPassword: false,
      hasName: false,
      userInfo: {
        email: "altgerdm@gmail.com",
        password: "12345678",
      },
      ...validations,
    };
  },
  props: ["submitForm", "buttonText", "hasName"],
};
</script>

<style lang="scss" scoped></style>
