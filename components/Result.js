import React from 'react';
import { Link } from 'react-router';

import Title from './Title';
import Thumbnail from './Thumbnail';

class Result extends React.Component {
  render() {
    const style = {
      display: 'block',
      textDecoration: 'none',
      position: 'relative',
      height: 180,
      width: 320,
      margin: 10,
      float: 'left'
    };

    return (
      <Link to={'/' + this.props.result.id} style={style}>
        <Title text={this.props.result.title} />
        <Thumbnail url={this.props.result.thumbnail} />
      </Link>
    );
  }
}

export default Result;
