import React from 'react';
import { IndexLink } from 'react-router';

import Search from './Search';
import ResultList from './ResultList';
 
class App extends React.Component {
  render() {
    const style = {
      padding: 10,
      fontFamily: 'Bebas Neue Bold',
      fontSize: '2em',
      lineHeight: 'inherit',
      color: 'black',
      textTransform: 'uppercase',
    };

    return (
      <div>
        <IndexLink to='/'><h1 style={style}>Hamelin</h1></IndexLink>
        {this.props.children}
        <Search />
        <ResultList />
      </div>
    );
  }
}

export default App;
