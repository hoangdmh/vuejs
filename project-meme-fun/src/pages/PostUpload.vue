<template>
  <div class="row">
    <div class="col-lg-8">
      <!--section-->
      <div class="ass1-section ass1-section__edit-post">
        <div class="ass1-section__content">
          <form action="#">
            <div class="form-group">
              <input
                v-model="url_image"
                type="text"
                class="form-control ttg-border-none"
                placeholder="https://"
              />
            </div>
            <div class="form-group">
              <textarea
                v-model="post_content"
                type="text"
                class="form-control ttg-border-none"
                placeholder="Mô tả ..."
              ></textarea>
            </div>
          </form>
          <div class="ass1-section__image" v-on:click="uploadImage">
            <a href="#">
              <img v-bind:src="renderImage" alt="default" />
            </a>
          </div>
          <a
            href="https://memeful.com/"
            target="_blank"
            class="ass1-btn ass1-btn-meme"
          >Chế ảnh từ meme</a>
          <button v-on:click="uploadImage" class="ass1-btn ass1-btn-meme">Đăng ảnh từ máy tính</button>
          <!-- ref -->
          <input
            ref="imageUpload"
            v-on:change="handleUploadImage"
            style="display: none"
            type="file"
            name="images"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <div class="col-lg-4">
      <aside class="ass1-aside ass1-aside__edit-post">
        <div>
          <button v-on:click="handleUploadPost" class="ass1-btn">Đăng bài</button>
        </div>
        <div class="ass1-aside__edit-post-head">
          <span style="display: block; width: 100%; margin-bottom: 10px;">Chọn danh mục</span>
          <label v-for="item in getListNavigation" v-bind:key="item.id" class="ass1-checkbox">
            <input v-bind:value="item.id" v-model="categories" type="checkbox" name="state-post" />
            <span></span>
            <p>{{item.text}}</p>
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
import { mapGetters, mapActions } from "vuex";
import { checkImageURL, checkImageFile } from "../helpers";

export default {
  name: "post-upload",
  data() {
    return {
      post_content: "",
      obj_image: {
        objFile: null,
        base64Url: ""
      },
      url_image: "",
      categories: []
    };
  },
  computed: {
    ...mapGetters(["getListNavigation"]),
    renderImage() {
      if (this.url_image) {
        return this.url_image;
      } else if (this.obj_image.base64Url) {
        return this.obj_image.base64Url;
      }
      return "/dist/images/no_image_available.jpg";
    }
  },
  methods: {
    uploadImage() {
      this.$refs.imageUpload.click();
    },
    handleUploadImage(e) {
      //console.log(e.target.files);
      if (e.target.files && e.target.files.length) {
        const imageUpload = e.target.files[0];
        //console.log("imageUpload", imageUpload);

        //check file type
        let check = checkImageFile(imageUpload);
        if (!check) {
          alert("File tai ve khong hop le!");
          return;
        }

        let reader = new FileReader();

        reader.addEventListener(
          "load",
          () => {
            // convert image file to base64 string
            let previewSrc = reader.result;
            this.obj_image.base64Url = previewSrc;
            this.obj_image.objFile = imageUpload;

            console.log("previewSrc", previewSrc);
          },
          false
        );

        if (imageUpload) {
          reader.readAsDataURL(imageUpload);
        }
      }
    },
    ...mapActions(["createNewPost"]),
    handleUploadPost() {
      let { post_content, categories, url_image, obj_image } = this;

      if (post_content && categories.length) {
        if (url_image || obj_image.objFile) {
          let data = {
            post_content,
            category: categories,
            url_image
          };

          if (obj_image.objFile) {
            data.objFile = obj_image.objFile;
          }

          //console.log("data data => ", data);

          this.createNewPost(data).then(res => {
            console.log("res => ", res);
            if (res.ok) {
              //reset data
              post_content = "";
              url_image = "";
              categories = [];
              obj_image = {
                objFile: null,
                base64Url: ""
              };

              alert(res.message);
            } else {
              alert(res.error);
            }
          });
        } else {
          alert("Vui long chon anh bai viet");
        }
      } else {
        alert("Vui long nhap day du thong tin");
      }
    }
  }
};
</script>

<style>
</style>
