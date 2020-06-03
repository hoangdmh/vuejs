export default {
  listTaskSearch: state => {
    const {strSearch} = state;
    const newItems = state.listTask.filter( item => {
      let lowerName = item.name.toLowerCase();
      let lowerSubString = strSearch.toLowerCase();
      return lowerName.includes(lowerSubString);
    });
    console.log('Getters listTaskSearch');
    return newItems;
  }
}
