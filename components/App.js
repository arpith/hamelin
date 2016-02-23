import React from 'react';
import { IndexLink } from 'react-router';

import Search from './Search';
import ResultList from './ResultList';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to='/'><h1>Hamelin</h1></IndexLink>
        {this.props.children}
        <Search />
        <ResultList />
      </div>
    );
  }
}

export default App;
