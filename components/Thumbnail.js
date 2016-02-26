import React from 'react';

class Thumbnail extends React.Component {
  render() {
    const style = {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1000,
      width: 320,
      height: 210,
      backgroundImage: 'url(' + this.props.url + ')',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      WebkitFilter: 'blur(1px)',
      MozFilter: 'blur(1px)',
      msFilter: 'blur(1px)',
      filter: 'blur(1px)'
    };

    return (
      <div style={style} />
    );
  }
}

export default Thumbnail;
