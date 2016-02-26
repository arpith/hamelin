import React from 'react';

class Title extends React.Component {
  render() {
    const style = {
      fontFamily: 'Bebas Neue Bold',
      fontSize: '2em',
      lineHeight: 'inherit',
      color: 'white',
      textTransform: 'uppercase',
    };

    return (
      <div style={style}>
        {this.props.text}
      </div>
    );
  }
}

export default Title;
