import React from 'react';
import SearchStore from '../stores/SearchStore';
import SearchActions from '../stores/SearchActions';
 
class Search extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: SearchStore.getValue()
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({value: SearchStore.getValue()});
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
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default Search;
