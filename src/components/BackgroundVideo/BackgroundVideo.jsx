import React from 'react';
import './BackgroundVideo.css';
import { assets } from '../../assets/assets'

const BackgroundVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="video-background">
        <source src={assets.background_video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BackgroundVideo;
