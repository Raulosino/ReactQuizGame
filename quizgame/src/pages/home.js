import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import start from "../sounds/sounds_easy.mp3";
import click from "../sounds/Mouse_Click_1-fesliyanstudios.com.mp3";

const Home = () => {
  const soundPlay = new Audio(click);

  const audioPlay = () => {
    soundPlay.play();
    soundPlay.volume = 0.1;
  };

  const [audio] = useState(new Audio(start));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    audio.volume = 0.1;
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return (
    <div className="homeBg generalBg">
      <div className="playBox text-center" onClick={toggle}>
        {playing ? <i class="fas fa-pause"></i> : <i class="fas fa-play"></i>}
      </div>
      <div className="home"></div>
      <h1>LET'S GET QUIZZICLE!</h1>
      <Link to="/general">
        <button className="playBtn" onClick={audioPlay}>
          Play
        </button>
      </Link>
      <Link to="/about">
        <button className="aboutBtn mt-3" onClick={audioPlay}>
          How to play
        </button>
      </Link>
      <footer>
        <p>
          &copy; Made with{" "}
          <span className="heart">
            <i class="fas fa-heart"></i>
          </span>{" "}
          for React 2021. All Rights Reserved.
        </p>
        <p>
          by Mariana Pantelic, Abdullah Haidar, Heriberto Rodriguez, Raul
          Eduarte
        </p>
      </footer>
    </div>
  );
};

export default Home;
