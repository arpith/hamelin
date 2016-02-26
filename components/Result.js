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
      top: 0,
      left: 0,
      zIndex: -1000,
      width: '320px',
      WebkitFilter: 'blur(1px)',
      MozFilter: 'blur(1px)',
      msFilter: 'blur(1px)',
      filter: 'blur(1px)'
    };

    const linkStyle = {
      fontFamily: 'Bebas Neue Bold',
      display: 'block',
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
      position: 'relative',
      height: '210px',
      width: '320px',
      border: 'thick solid black',
      margin: '20px',
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
