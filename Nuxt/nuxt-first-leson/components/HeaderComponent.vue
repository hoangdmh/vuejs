<template>
  <nav>
    <ul>
      <li>
        <nuxt-link activeClass exactActiveClass to="/">Home</nuxt-link>
      </li>
      <li>
        <nuxt-link activeClass exactActiveClass to="/desks">Desk</nuxt-link>
      </li>
      <li>
        <nuxt-link activeClass exactActiveClass to="/profile">Profile</nuxt-link>
      </li>
      <li>
        <nuxt-link activeClass exactActiveClass to="/settings">Settings</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "header-component"
};
</script>

<style lang="scss" scoped>
nav {
  ul {
    display: flex;
    li {
      list-style-type: none;
      margin-right: 15px;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
