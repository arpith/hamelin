import React from 'react';
import { Link } from 'react-router';

class Result extends React.Component {
  render() {
    const itemStyle = {
      listStyle: 'none',
      display: 'block'
    };

    const imgStyle = {
      position: 'absolute',
      zIndex: -1000,
      width: 320,
      WebkitFilter: 'blur(2px)',
      MozFilter: 'blur(2px)',
      msFilter: 'blur(2px)',
      filter: 'blur(2px)'
    };

    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
      position: 'relative',
      height: 210,
      width: 320
    };

    return (
      <li style={itemStyle}>
        <Link to={'/' + this.props.result.id} style={linkStyle}>
          {this.props.result.title}
          <img src={this.props.result.thumbnail} style={imgStyle} />
        </Link>
      </li>
    );
  }
}

export default Result;
