export default {
  increment(state, number){
    console.log('Mutation increment main.js', state);
    state.count += number;
  },
  decrement(state, number = 1){
    console.log('Mutation decrement main.js', state);
    state.count -= number;
  }
}