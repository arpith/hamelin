import React from 'react';
import { Link } from 'react-router';

class Result extends React.Component {
  render() {
    let style = {
      backgroundImage: 'url(' + this.props.result.thumbnail + ')',
      listStyle: 'none',
      display: 'block',
      width: '320px',
      height: '240px',
      filter: 'blur(5px)'
    };
    return (
      <li style={style}><Link to={'/' + this.props.result.id}>{this.props.result.title}</Link></li>
    );
  }
}

export default Result;
