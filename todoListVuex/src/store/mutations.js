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
    //console.log('Mutation TOGGLE_FORM');
  },
  HANDLE_SEARCH(state, strSearch){
    //console.log('Mutation HANDLE_SEARCH', strSearch);
    state.strSearch = strSearch;
  },
  HANDLE_SORT(state, { orderBy, orderDir }){
    console.log('Mutation HANDLE_SORT', orderBy, orderDir);
    state.orderBy = orderBy;
    state.orderDir = orderDir;
  }
}
