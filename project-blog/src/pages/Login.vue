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
          <h1 class="mb-5">Login form</h1>
          <form name="sentMessage" v-if="!isLogin">
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
              <button v-on:click.prevent="handleLogin" type="submit" class="btn btn-primary">Login</button>
            </div>
          </form>
          <div v-else>
            <h4 class="mb-3">Xin chào admin</h4>
            <button v-on:click.prevent="handleLogout" type="submit" class="btn btn-primary">Logout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
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
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    ...mapActions(["checkLogin", "checkLogout"]),
    handleLogin() {
      let data = {
        email: this.email,
        password: this.password
      };
      this.checkLogin(data).then(res => {
        if (res) {
          alert("Dang nhap thanh cong");
          this.$router.push("/");
        } else {
          alert("Dang nhap that bai");
        }
      });
      //console.log("Check => ", check);
    },
    handleLogout() {
      this.checkLogout(false);
    }
  }
};
</script>

<style>
</style>
