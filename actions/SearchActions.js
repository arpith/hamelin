import AppDispatcher from '../dispatcher/AppDispatcher';

const SearchActions = {
  update: function(value) {
    AppDispatcher.dispatch({
      actionType: 'update-search-value',
      value: value
    });
  }
};

export default SearchActions;
