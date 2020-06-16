<template>
  <div class="ass1-login">
    <div class="ass1-login__content">
      <p>Đổi mật khẩu</p>
      <div class="ass1-login__form">
        <form action="#">
          <input type="password" class="form-control" placeholder="Mật khẩu cũ" required />
          <input type="password" class="form-control" placeholder="Mật khẩu mới" required />
          <input type="password" class="form-control" placeholder="Xác nhận mật khẩu mới" required />
          <div class="ass1-login__send justify-content-center">
            <button type="submit" class="ass1-btn">Gửi</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "change-password"
};
</script>

<style>
</style>
