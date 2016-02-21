import AppDispatcher from '../dispatcher/AppDispatcher';

const SearchActions = {
  search: function(value) {
    AppDispatcher.dispatch({
      actionType: 'update-search-value',
      value: value
    });
  }
};

export default SearchActions;
