import React from 'react';
 
class Video extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.videoId}</h2>
      </div>
    );
  }
}
export default Video;
