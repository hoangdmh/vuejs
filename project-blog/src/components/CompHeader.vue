<template>
  <!-- Page Header -->
  <header class="masthead" v-bind:style="`background-image: url('${bg}')`">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div v-bind:class="classHeader">
            <h1>{{title}}</h1>
            <span class="subheading">{{subHeading}}</span>
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "comp-header",
  props: {
    bg: {
      type: String,
      default: "/dist/img/home-bg.jpg"
    },
    title: {
      type: String,
      default: "Home Page"
    },
    subHeading: {
      type: String,
      default: "A Blog Theme by Start Bootstrap"
    },
    classHeader: {
      type: String,
      default: "site-heading"
    }
  }
};
</script>

<style>
</style>
