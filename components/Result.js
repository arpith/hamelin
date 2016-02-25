import React from 'react';
import { Link } from 'react-router';

class Result extends React.Component {
  render() {
    const itemStyle = {
      backgroundImage: 'url(' + this.props.result.thumbnail + ')',
      listStyle: 'none',
      display: 'block',
      width: '320px',
      height: '210px',
      backgroundPosition: '50% 0%',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      WebkitFilter: 'blur(5px)',
      MozFilter: 'blur(5px)',
      msFilter: 'blur(5px)',
      filter: 'blur(5px)'
    };

    const linkStyle = {
      textDecoration: 'none',
      color: 'white',
      textTransform: 'uppercase',
    };

    return (
      <li style={itemStyle}><Link to={'/' + this.props.result.id} style={linkStyle}>{this.props.result.title}</Link></li>
    );
  }
}

export default Result;
