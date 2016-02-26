import React from 'react';
import { Link } from 'react-router';

class Result extends React.Component {
  render() {
    const itemStyle = {
      listStyle: 'none',
      display: 'block',
    };

    const imgStyle = {
      position: 'fixed',
      top: 0,
      zIndex: -1000,
      width: '320px',
      WebkitFilter: 'blur(3px)',
      MozFilter: 'blur(3px)',
      msFilter: 'blur(3px)',
      filter: 'blur(3px)'
    };

    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
    };

    return (
      <li style={itemStyle}>
        <Link to={'/' + this.props.result.id} style={linkStyle}>
          {this.props.result.title}
          <img src={this.props.result.thumbnail} style={imgStyle}>
        </Link>
      </li>
    );
  }
}

export default Result;
