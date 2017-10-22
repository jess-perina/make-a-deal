import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Lose.css';

const Lose = () => {
  const url = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  return (
    <div className="loseContainer">
      <div className="banner">
        <h1>You Lose!</h1>
        <p> Well that sucks. Here is your BAD THING!</p>
      </div>

      <div className="video">
        <iframe  title="lose_video" width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
      <p>Too bad. <Link to="/">Give it another shot?</Link></p> 
    </div>
  )
};

export default Lose;