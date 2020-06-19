<template>
  <div class="ass1-section__feeling">
    <div class="ass1-feeling">
      <button type="button" class="btn btn-outline-primary mr-3">Tag name</button>
      <ul>
        <li v-for="tag in tagDetail.categories" v-bind:key="tag.TAG_ID">
          <router-link v-bind:to="getLinkCategory(tag)">{{tag.tag_value}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { removeVietnameseFromString } from "../helpers";

export default {
  name: "post-feeling",
  props: {
    tagDetail: {
      type: Object,
      default: {}
    }
  },
  methods: {
    getLinkCategory(category) {
      return {
        name: "home-page",
        query: {
          text: removeVietnameseFromString(category.tag_value),
          tagIndex: category.tag_index
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ass1-feeling {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 20px;
      margin-top: 15px;
      font-weight: bold;
      a {
        text-decoration: underline;
      }
    }
  }
}
</style>>

