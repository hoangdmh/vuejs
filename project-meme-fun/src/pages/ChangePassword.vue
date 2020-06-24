<template>
  <div class="ass1-login">
    <div class="ass1-login__content">
      <p>Đổi mật khẩu</p>
      <div class="ass1-login__form">
        <form action="#" v-if="currentUser" v-on:submit.prevent="handleChangePassword">
          <input
            v-model="oldPassword"
            type="password"
            class="form-control"
            placeholder="Mật khẩu cũ"
            required
          />
          <input
            v-model="newPassword"
            type="password"
            class="form-control"
            placeholder="Mật khẩu mới"
            required
          />
          <input
            v-model="reNewPassword"
            type="password"
            class="form-control"
            placeholder="Xác nhận mật khẩu mới"
            required
          />
          <div class="ass1-login__send justify-content-center">
            <button type="submit" class="ass1-btn">Gửi</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "change-password",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      reNewPassword: "",
      userid: this.$route.params.id
    };
  },
  watch: {
    // lắng nghe sự thay đổi của router
    $route(to, from) {
      this.userid = to.params.id;
      this.checkIsCurrentUser();
    }
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  created() {
    this.checkIsCurrentUser();
  },
  methods: {
    ...mapActions(["changePassword"]),
    checkIsCurrentUser() {
      if (this.userid && this.currentUser) {
        if (this.userid != this.currentUser.USERID) {
          this.$router.push("/");
        }
      }
    },
    handleChangePassword() {
      //console.log("handleChangePassword");
      let { oldPassword, newPassword, reNewPassword } = this;
      if (oldPassword && newPassword && reNewPassword) {
        if (oldPassword == newPassword) {
          alert("Mat khau cu khong duoc trung voi mat khau moi");
        } else if (newPassword != reNewPassword) {
          alert("Mat khau nhap lai khong khop");
        } else {
          let data = {
            oldPassword,
            newPassword,
            reNewPassword
          };
          this.changePassword(data).then(res => {
            if (res.ok) {
              alert(res.message);
              this.$router.push("/");
            } else {
              alert(res.error);
            }
          });
        }
      } else {
        alert(" Nhap day du thong tin");
      }
    }
  }
};
</script>

<style>
</style>
