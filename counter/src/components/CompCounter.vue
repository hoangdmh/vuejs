<template>
    <div>
        <h2>{{ count}}</h2>
        <button v-on:click="count++">Plus</button>
        <button v-on:click="count--">Minus</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'comp-counter',
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
            }
        },
        ...mapGetters([
            'value',
            'countDouble',
        ]) 
    },
    mounted(){
        console.log('count', this.$store.getters.count);
        console.log('countDouble', this.$store.getters.countDouble);
    }

}
</script>

<style>

</style>
