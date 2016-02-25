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
    const buttonStyle = {
      font: 'inherit',
      background: '#157DEC',
      WebkitAppearance: 'none',
      borderRadius: '5',
      color: 'white'
    };
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
        <input type="submit" value="Search" style={buttonStyle} />
      </form>
    );
  }
}

export default Search;
