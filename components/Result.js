import React from 'react';
import { Link } from 'react-router';

import Thumbnail from './Thumbnail';

class Result extends React.Component {
  render() {
    const style = {
      fontFamily: 'Bebas Neue Bold',
      fontSize: '2em',
      lineHeight: '2.2em',
      display: 'block',
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
      position: 'relative',
      height: 210,
      width: 320,
      border: 'thick solid black',
      margin: 20
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
