<template>
  <div>
    <!-- Header -->
    <home-header />

    <!-- Main Header -->
    <main-header />

    <!-- Content -->
    <main class="container">
      <div class="row">
        <div class="col-md-9">
          <router-view></router-view>
        </div>
        <div class="col-md-3">
          <sidebar />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader";
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";

export default {
  name: "kanban-board",
  components: {
    HomeHeader,
    MainHeader,
    Sidebar
  }
};
</script>

<style>
</style>
