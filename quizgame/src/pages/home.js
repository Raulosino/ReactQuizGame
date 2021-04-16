import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import start from "../sounds/sounds_easy.mp3";

const Home = () => {
  /* const [state, setState] = useState({ isPlaying: false });

  let startSound = new Audio(start);

  const playMusic = () => {
    if (state.isPlaying === false) {
      startSound.play();
      setState({ isPlaying: true });
    } else {
      startSound.pause();
      startSound.currentTime = 0;
      setState({ isPlaying: false });
    }
  }; */

  const [audio] = useState(new Audio(start));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
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
      <Link to="/play">
        <button>Play</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
      <footer></footer>
    </div>
  );
};

export default Home;
