<template>
  <div class="container">
    <header>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/desks">Desk</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/profile">Profile</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/settings">Settings</nuxt-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  ul {
    display: flex;
    li {
      margin-right: 15px;
      list-style-type: none;
    }
  }
}
</style>>
