<template>
  <div class="ass1-login">
    <div class="ass1-login__logo">
      <a href="index.html" class="ass1-logo">ZendVn Meme</a>
    </div>
    <div class="ass1-login__content">
      <p>Đăng nhập</p>
      <div class="ass1-login__form">
        <form action="#">
          <input type="text" class="form-control" placeholder="Email" required />
          <div class="ass1-input-copy">
            <input type="password" class="form-control" placeholder="Mật khẩu" required />
            <a href="#">Copy</a>
          </div>
          <div class="ass1-login__send">
            <a href="dang-ky.html">Đăng ký một tài khoản</a>
            <button type="submit" class="ass1-btn">Đăng nhập</button>
          </div>
        </form>
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
