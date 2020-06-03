export default {
  CHANGE_TASK(state, newTasks){
    //console.log('Mutation CHANGE_TASK', newTasks);
    state.listTask = newTasks;
  },
  TOGGLE_FORM(state){
    // if(this.isShowForm){
    //   this.taskSelected = null;
    // }
    state.isShowForm = !state.isShowForm;
    console.log('Mutation TOGGLE_FORM');
  }
}
