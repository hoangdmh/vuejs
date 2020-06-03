export default {
  incrementAction (context, obj) {
    console.log('Action increment', obj);
    context.commit('increment', obj.number);
  },
  decrementAction (context, obj) {
    console.log('Action decrement', obj);
    context.commit('decrement', obj.number);
  }
}