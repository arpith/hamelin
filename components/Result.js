import React from 'react';
import { Link } from 'react-router';

class Result extends React.Component {
  render() {
    const thumbnailStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1000,
      width: 320,
      height: 210,
      backgroundImage: 'url(' + this.props.result.thumbnail + ')',
      backgroundPosition: '50% 0%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
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
      height: 210px,
      width: 320px,
      border: 'thick solid black',
      margin: '20px',
    };

    return (
      <Link to={'/' + this.props.result.id} style={linkStyle}>
        {this.props.result.title}
        <div style={thumbnailStyle} />
      </Link>
    );
  }
}

export default Result;
