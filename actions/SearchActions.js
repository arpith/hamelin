import AppDispatcher from '../dispatcher/AppDispatcher';

const SearchActions = {
  searchVideos: function(query) {
    AppDispatcher.dispatch({
      actionType: 'update-search-value',
      query: query
    });
  }

  searchPlaylists: function(query) {
    AppDispatcher.dispatch({
      actionType: 'search-playlists',
      query: query
    });
  }
};

export default SearchActions;
