export default {
  listTaskSearchSort: state => {
    const {strSearch} = state;
    const newItems = state.listTask.filter( item => {
      let lowerName = item.name.toLowerCase();
      let lowerSubString = strSearch.toLowerCase();
      return lowerName.includes(lowerSubString);
    });

    var listTask = [...newItems];
    listTask.sort(function(a, b){
      var numberSort = state.orderDir === 'asc' ? -1 : 1;
      if(a[state.orderBy] < b[state.orderBy]){
        return numberSort;
      }if(a[state.orderBy] > b[state.orderBy]){
        return numberSort * (-1);
      }
      return 0;
    });
    return listTask;
  }
}
