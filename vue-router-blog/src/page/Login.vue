<template>
  <div class="container col-5 mt-5">
    <h1>Login Form</h1>
    <b-form v-if="show">
      <b-form-group
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input type="email" placeholder="Enter email"></b-form-input>
      </b-form-group>
      <b-form-group
        label="Password"
        label-for="input-2"
        description="We'll never share your password with anyone else."
      >
        <b-form-input type="password" placeholder="Enter password"></b-form-input>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      form: {
        email: "",
        name: "",
        food: null,
        checked: []
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn"
      ],
      show: true
    };
  }
};
</script>

<style>
</style>
