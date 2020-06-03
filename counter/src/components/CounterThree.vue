<template>
    <div>
        <h2>{{ count}}</h2>
        <button v-on:click="plus">Plus</button>
        <button v-on:click="minus">Minus</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    name: 'counter-two',
    data() {
        return {
            
        }
    },
    computed: {
      ...mapGetters([
        'count'
      ])
    },
    methods: {
      ...mapActions([
        'incrementAction',
        'decrementAction'
      ]),
      plus(){
        console.log('$st plus');
        //this.$store.commit('increment', 5);
        let obj = {
          number: 10
        };
        //this.$store.dispatch('incrementAction', obj)
        this.incrementAction(obj);
      },
      minus(){
        console.log('$store minus');
        //this.$store.commit('decrement', 5);
        let obj = {
          number: 10
        };
        //this.$store.dispatch('decrementAction', obj);
        this.decrementAction(obj);
      }
    }
}
</script>

<style>

</style>
