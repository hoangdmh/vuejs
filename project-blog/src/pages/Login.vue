<template>
  <div>
    <comp-header
      bg="/dist/img/contact-bg.jpg"
      title="Login"
      subHeading="Have questions? I have answers."
    />
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <h1>Login form</h1>
          <form name="sentMessage" id="contactForm" novalidate>
            <div class="control-group">
              <div class="form-group floating-label-form-group controls">
                <label>Email</label>
                <input v-model="email" type="email" class="form-control" placeholder="Email" />
              </div>
            </div>
            <div class="control-group">
              <div class="form-group col-xs-12 floating-label-form-group controls">
                <label>Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
              </div>
            </div>
            <br />
            <div id="success"></div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CompHeader from "../components/CompHeader";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  components: {
    CompHeader
  }
};
</script>

<style>
</style>
