<template>
  <div class="ass1-head-user" v-if="userInfor">
    <div class="ass1-head-user__content">
      <div class="ass1-head-user__image">
        <a href="#">
          <img src="/dist/images/cat-1634369_1920.jpg" alt />
        </a>
      </div>
      <div class="ass1-head-user__info">
        <div class="ass1-head-user__info-head">
          <div class="ass1-head-user__name">
            <span>{{userInfor.fullname}}</span>
            <i>
              <img src="/dist/fonts/emotion/svg/Verified.svg" alt />
            </i>
          </div>
          <div class="w-100"></div>
          <a href="#" class="ass1-head-user__btn-follow ass1-btn">Theo dõi</a>
          <a href="thay-doi-password.html" class="ass1-head-user__btn-follow ass1-btn">Đổi mật khẩu</a>
          <a href="profile.html" class="ass1-head-user__btn-follow ass1-btn">Profile</a>
          <!-- <a href="#" class="ass1-head-user__btn-options ass1-btn-icon"><i class="icon-Options"></i></a> -->
        </div>
        <div class="ass1-head-user__info-statistic">
          <div class="ass1-btn-icon">
            <i class="icon-Post"></i>
            <span>Bài viết: 9999</span>
          </div>
          <div class="ass1-btn-icon">
            <i class="icon-Followers"></i>
            <span>Theo dõi: 99999</span>
          </div>
          <div class="ass1-btn-icon">
            <i class="icon-Following"></i>
            <span>Đang theo dõi: 999</span>
          </div>
          <!-- <div class="ass1-btn-icon"><i class="icon-Upvote"></i><span>Up Vote: 999999</span></div> -->
        </div>
        <p>{{userInfor.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-page-infor",
  props: {
    userInfor: {
      type: Object,
      default: null
    }
  }
};
</script>

<style>
</style>
