import React from 'react';
import { Link } from 'react-router';

class Result extends React.Component {
  render() {
    return (
      <li><Link to={'/' + this.props.result.id}>{this.props.result.title}</Link></li>
    );
  }
}

export default Result;
