<template>
  <div class="row">
    <div class="col-lg-8">
      <!--section-->
      <div class="ass1-section ass1-section__edit-post">
        <div class="ass1-section__content">
          <form action="#">
            <div class="form-group">
              <input type="text" class="form-control ttg-border-none" placeholder="https://" />
            </div>
            <div class="form-group">
              <textarea type="text" class="form-control ttg-border-none" placeholder="Mô tả ..."></textarea>
            </div>
          </form>
          <div class="ass1-section__image">
            <a href="#">
              <img src="/dist/images/no_image_available.jpg" alt="default" />
            </a>
          </div>
          <a href="https://memeful.com/" target="_blank" class="ass1-btn ass1-btn-meme">
            Chế ảnh từ
            meme
          </a>
          <a href="#" class="ass1-btn ass1-btn-meme">Đăng ảnh từ máy tính</a>
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <aside class="ass1-aside ass1-aside__edit-post">
        <div>
          <a href="#" class="ass1-btn">Đăng bài</a>
        </div>
        <div class="ass1-aside__edit-post-head">
          <span style="display: block; width: 100%; margin-bottom: 10px;">Chọn danh mục</span>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" checked="checked" />
            <span></span>
            <p>Ảnh troll</p>
          </label>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" />
            <span></span>
            <p>FapTV</p>
          </label>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" checked="checked" />
            <span></span>
            <p>Ảnh troll</p>
          </label>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" />
            <span></span>
            <p>FapTV</p>
          </label>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" checked="checked" />
            <span></span>
            <p>Ảnh troll</p>
          </label>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" />
            <span></span>
            <p>FapTV</p>
          </label>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" checked="checked" />
            <span></span>
            <p>Ảnh troll</p>
          </label>
          <label class="ass1-checkbox">
            <input type="radio" name="state-post" />
            <span></span>
            <p>FapTV</p>
          </label>
        </div>
        <div class="ass1-aside__get-code">
          <p>Share Link</p>
        </div>
        <div class="ass1-aside__social">
          <a href class="ass1-btn-social__facebook ass1-btn-social">
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a href class="ass1-btn-social__twitter ass1-btn-social">
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a href class="ass1-btn-social__google ass1-btn-social">
            <i class="fa fa-google-plus" aria-hidden="true"></i>
          </a>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-upload"
};
</script>

<style>
</style>
