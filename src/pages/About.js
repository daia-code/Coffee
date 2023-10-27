import React from 'react';
import './About.css'
const videoURL = 'https://firebasestorage.googleapis.com/v0/b/coffee-65476.appspot.com/o/The%20Story%20of%20Coffee%20_%20History%20of%20Coffee%20_%20Motionlab.mp4?alt=media&token=1bd8d070-461d-4de2-8c55-159fbe1a8636';

export default function About() {
  return (
    <div className="about-coffee">
    <div className="video-container">
      <div className="video-wrapper">
        <video controls className="video">
          <source src={videoURL} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
    <div className="text-container">
      <h2>About Coffee</h2>
      <p>
        Coffee is a beloved beverage enjoyed by people around the world. It has a rich history
        and is deeply intertwined with different cultures. This video provides insights into the
        history of coffee and its significance in our lives.
      </p>
    </div>
  </div>
  
  );
}

