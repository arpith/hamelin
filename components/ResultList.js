import React from 'react';
import SearchStore from '../stores/SearchStore';

import Result from './Result';
 
class ResultList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      results: SearchStore.getResults()
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({results: SearchStore.getResults()});
  }

  componentDidMount() {
    SearchStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    SearchStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div>
        {this.state.results.map((result) => {
          return <Result key={result.id} result={result} />;
        })}
      </div>
    );
  }
}

export default ResultList;
