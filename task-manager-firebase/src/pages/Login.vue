<template>
  <div id="page-register">
    <div class="container">
      <div class="card card-container">
        <img
          id="profile-img"
          alt
          class="profile-img-card"
          src="https://ssl.gstatic.com/accounts/ui/avatar_2x.png"
        />
        <p id="profile-name" class="profile-name-card"></p>

        <form id="form-signup" class="form-signin">
          <div class="form-group">
            <!-- <label>Email</label> -->
            <input type="email" class="form-control" placeholder="Địa chỉ email" />
          </div>
          <div class="form-group">
            <!-- <label>Mật khẩu</label> -->
            <input type="password" class="form-control" placeholder="Mật khẩu" />
          </div>
          <button class="btn btn-lg btn-primary btn-block btn-signin" type="submit">Đăng nhập</button>
        </form>

        <a href="#" class="register">Đăng ký một tài khoản</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style>
</style>
