import React from 'react';
import Search from './Search';
import ResultList from './ResultList';
 
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hamelin</h1>
        {this.props.children}
        <Search />
        <ResultList />
      </div>
    );
  }
}
export default App;
