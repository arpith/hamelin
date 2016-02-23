import React from 'react';
 
class Video extends React.Component {
  render() {
    let baseURL = "http://youtube.com/embed/";
    let videoID = this.props.params.videoId;
    let url = baseURL + videoID + "?autoplay=1&origin=https://hamel.in";
    return (<iframe
      id="ytplayer"
      type="text/html"
      width="640"
      height="390"
      src={url}
      frameborder="0"
    />);
  }
}

export default Video;
