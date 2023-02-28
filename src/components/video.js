import React from "react";

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  return (
    <React.Fragment>
      <div className={`video ${props.classes}`}>
        <iframe
          src={videoSrcURL}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
          className=""
        />
      </div>
    </React.Fragment>
  );
};
export default Video;
