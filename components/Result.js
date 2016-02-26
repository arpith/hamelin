import React from 'react';
import { Link } from 'react-router';

import Thumbnail from './Thumbnail';

class Result extends React.Component {
  render() {
    const style = {
      fontFamily: 'Bebas Neue Bold',
      fontSize: '2em',
      lineHeight: 'inherit',
      display: 'block',
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
      position: 'relative',
      height: 180,
      width: 320,
      margin: 20,
      float: 'left'
    };

    return (
      <Link to={'/' + this.props.result.id} style={style}>
        {this.props.result.title}
        <Thumbnail url={this.props.result.thumbnail} />
      </Link>
    );
  }
}

export default Result;
