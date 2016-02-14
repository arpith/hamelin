import React from 'react';

class Result extends React.Component {
  render() {
    return (
      <li>{this.props.result.title}</li>
    );
  }
}

export default Result;
