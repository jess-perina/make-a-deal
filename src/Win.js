import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Win.css';

const Win = () => {
  const url = "https://www.youtube.com/embed/fzzjgBAaWZw";

  return (
    <div className="winContainer">
      <div className="banner">
        <h1>You Win!</h1>
        <p> Booyah! Here is your AWESOME THING!</p>
      </div>


      <div className="video">
        <iframe title="win_video" width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
      </div>
      <p>You just won. You want to <Link to="/">play again</Link>?</p>   
    </div>
  );
};

export default Win;

// play again needs to be link