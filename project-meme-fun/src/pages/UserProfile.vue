<template>
  <div class="ass1-login">
    <div class="ass1-login__content">
      <p>Profile</p>

      <div class="ass1-login__form">
        <div class="avatar">
          <img src="https://bodiezpro.com/wp-content/uploads/2015/09/medium-default-avatar.png" alt />
        </div>
        <form action="#">
          <input type="text" class="form-control" placeholder="Tên ..." required />

          <select class="form-control">
            <option value>Giới tính</option>
            <option value="1">Nam</option>
            <option value="0">Nữ</option>
          </select>
          <input type="file" name="avatar" placeholder="Ảnh đại diện" class="form-control" />
          <textarea class="form-control" cols="30" rows="5" placeholder="Mô tả ngắn ..."></textarea>
          <div class="ass1-login__send justify-content-center">
            <button type="submit" class="ass1-btn">Cập nhật</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-profile"
};
</script>

<style>
</style>
