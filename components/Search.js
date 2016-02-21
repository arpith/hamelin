import React from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../stores/SearchActions';
 
class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      query: SearchStore.getQuery()
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({query: SearchStore.getQuery()});
  }

  handleChange(event) {
    SearchActions.update(event.target.value);
  }

  componentDidMount() {
    SearchStore.addChangeListener(this.updateState);
  }

  componentWillUnmount() {
    SearchStore.removeChangeListener(this.updateState);
  }

  render() {
    return (
      <form>
        <input type="text" value={this.state.query} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default Search;
