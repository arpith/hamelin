import React from 'react';
import Button from './Button';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';
 
class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: 'Official Video'
    };
    this.searchVideos = this.searchVideos.bind(this);
    this.searchPlaylists = () => SearchActions.searchPlaylists(this.state.query);
    this.updateState = (e) => this.setState({query: e.target.value});
    this.searchVideos();
  }

  searchVideos(e) {
    if (e) e.preventDefault();
    SearchActions.searchVideos(this.state.query);
  }

  render() {
    const fieldStyle = {
      font: 'inherit',
      paddingLeft: '5',
      WebkitAppearance: 'none',
      border: 'thin solid',
      borderColor: '#4A525A',
      borderRadius: '5',
    };
    return (
      <form onSubmit={this.searchVideos}>
        <input
          type="text"
          value={this.state.query}
          onChange={this.updateState}
          style={fieldStyle}
          />
        <Button value="Search" />
      </form>
    );
  }
}

export default Search;
