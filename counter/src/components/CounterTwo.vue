<template>
    <div>
        <h2>{{ count}}</h2>
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>

<script>
export default {
    name: 'counter-two',
    data() {
        return {
            
        }
    },
    computed: {
        count: {
            get() {
                return this.$store.state.count
            },
            set(value) {
                this.$store.state.count = value;
                //console.log('Store', this.$store.state);
            }
        }
    }
}
</script>

<style>

</style>
