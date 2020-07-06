<template>
  <div class="page">
    <div class="nav">
      <ul>
        <li>
          <nuxt-link to="/settings">General</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/desk">Desks</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings/schedule">Schedule</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-child />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  .nav {
    margin-right: 30px;
  }
}
</style>>
