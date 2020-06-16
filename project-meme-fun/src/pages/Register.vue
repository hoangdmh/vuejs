<template>
  <div class="ass1-login">
    <div class="ass1-login__logo">
      <a href="index.html" class="ass1-logo">ZendVn Meme</a>
    </div>
    <div class="ass1-login__content">
      <p>Đăng ký một tài khoản</p>
      <div class="ass1-login__form">
        <form action="#">
          <input type="text" class="form-control" placeholder="Tên hiển thị" required />
          <input type="email" class="form-control" placeholder="Email" required />
          <input type="password" class="form-control" placeholder="Mật khẩu" required />
          <input type="password" class="form-control" placeholder="Nhập lại mật khẩu" required />
          <div class="ass1-login__send">
            <a href="dang-nhap.html">Đăng nhập</a>
            <button type="submit" class="ass1-btn">Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register"
};
</script>

<style>
</style>
