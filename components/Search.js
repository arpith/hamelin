import React from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../actions/SearchActions';
 
class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: 'Official Video'
    };
    this.search = this.search.bind(this);
    this.updateState = this.updateState.bind(this);
    this.search();
  }

  updateState(e) {
    this.setState({query: e.target.value});
  }

  search() {
    SearchActions.search(this.state.query);
  }

  render() {
    return (
      <form onSubmit={this.search}>
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
