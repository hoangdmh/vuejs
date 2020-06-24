<template>
  <div class="ass1-login">
    <div class="ass1-login__content">
      <p>Profile</p>

      <div class="ass1-login__form">
        <div class="avatar">
          <img v-bind:src="getAvatar" alt />
        </div>
        <form action="#" v-if="currentUser" v-on:submit.prevent="handleEditProfile">
          <input
            v-bind:value="currentUser.fullname"
            v-on:input="fullname = $event.target.value"
            type="text"
            class="form-control"
            placeholder="Tên ..."
            required
          />

          <select
            v-bind:value="currentUser.gender"
            v-on:change="gender = $event.target.value"
            class="form-control"
          >
            <option value disabled>Giới tính</option>
            <option value="nam">Nam</option>
            <option value="nu">Nữ</option>
          </select>

          <input
            v-on:change="uploadAvatar"
            type="file"
            name="avatar"
            placeholder="Ảnh đại diện"
            class="form-control"
          />

          <textarea
            v-bind:value="currentUser.description"
            v-on:input="description = $event.target.value"
            class="form-control"
            cols="30"
            rows="5"
            placeholder="Mô tả ngắn ..."
          ></textarea>

          <div class="ass1-login__send justify-content-center">
            <button type="submit" class="ass1-btn">Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "user-profile",
  data() {
    return {
      fullname: "",
      description: "",
      gender: "",
      avatar: {
        objFile: null,
        base64Url: ""
      },
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
    ...mapGetters(["currentUser"]),
    getAvatar() {
      if (this.avatar.base64Url === "" && this.currentUser) {
        return this.currentUser.profilepicture;
      } else {
        return this.avatar.base64Url;
      }
    }
  },
  created() {
    this.checkIsCurrentUser();
  },
  updated() {
    this.checkIsCurrentUser();
  },
  methods: {
    checkIsCurrentUser() {
      if (this.userid && this.currentUser) {
        if (this.userid != this.currentUser.USERID) {
          this.$router.push("/");
        }
      }
    },
    handleEditProfile() {
      console.log("Fullname", this.fullname);
      console.log("Gender", this.gender);
      console.log("Description", this.description);
    },
    uploadAvatar(e) {
      //console.log(e.target.files);
      if (e.target.files && e.target.files.length) {
        const fileAvatar = e.target.files[0];
        //console.log("fileAvatar", fileAvatar);
        let reader = new FileReader();

        reader.addEventListener(
          "load",
          () => {
            // convert image file to base64 string
            let previewSrc = reader.result;
            this.avatar.base64Url = previewSrc;
            this.avatar.objFile = fileAvatar;

            console.log("previewSrc", previewSrc);
          },
          false
        );

        if (fileAvatar) {
          reader.readAsDataURL(fileAvatar);
        }
      }
    }
  }
};
</script>

<style>
</style>
