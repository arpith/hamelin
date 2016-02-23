import React from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';
 
class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: 'Official Video'
    };
    this.searchVideos = () => SearchActions.searchVideos(this.state.query);
    this.searchPlaylists = () => SearchActions.searchPlaylists(this.state.query);
    this.updateState = (e) => this.setState({query: e.target.value});
    this.searchVideos();
  }

  render() {
    return (
      <form onSubmit={this.searchVideos}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.updateState}
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
