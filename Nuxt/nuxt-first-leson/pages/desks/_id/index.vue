<template>
  <h1>Desks by id {{$route.params.id}}</h1>
</template>

<script>
export default {
  validate({ params }) {
    //console.log(context);
    return /^[0-9]{9,12}$/.test(params.id);
  }
};
</script>

<style>
</style>
