export default {
  changeTasks(context, newTasks){
    console.log("Action changeTask", newTasks);
    context.commit('CHANGE_TASK', newTasks);
  },
  toggleForm(context){
    //console.log("Action toggleForm");
    context.commit('TOGGLE_FORM');
  },
  handleSearch(context, strSearch){
    //console.log("Action handleSearch");
    context.commit('HANDLE_SEARCH', strSearch);
  },
  handleSort(context, { orderBy, orderDir }){
    //console.log('Action HANDLE_SORT');
    context.commit('HANDLE_SORT', { orderBy, orderDir });
  },
  handleDelete({commit, state}, taskDelete){
    console.log('Action handleDelete', taskDelete);
    let newListTask = state.listTask.filter((task) => task.id !== taskDelete.id);
    commit('CHANGE_TASK', newListTask);
  }
}
