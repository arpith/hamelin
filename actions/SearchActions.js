import AppDispatcher from '../dispatcher/AppDispatcher';

const SearchActions = {
  searchVideos: function(query) {
    AppDispatcher.dispatch({
      actionType: 'search-videos',
      query: query
    });
  },

  searchPlaylists: function(query) {
    AppDispatcher.dispatch({
      actionType: 'search-playlists',
      query: query
    });
  }
};

export default SearchActions;
