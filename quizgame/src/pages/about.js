import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="aboutBg generalBg">
      <div className="quizImg"></div>
      <div className="aboutContainer">
        <h3>Welcome!</h3>
        <p>
          Choose a category in which to play the Quiz from Celebrities, Films,
          General Knowledge, Geography, History, Music, Sports, Television and
          Vehicles.
        </p>
        <p>RULES:</p>
        <ul>
          <li>
            You get a starting bonus of 500 <i class="fas fa-coins"></i>
          </li>
          <li>
            For each correct answer you get 100 <i class="fas fa-coins"></i>
          </li>
          <li>
            For each incorrect answer you lose 10 <i class="fas fa-coins"></i>
          </li>
        </ul>
        <p>HELP OPTIONS:</p>
        <ul>
          <li>
            50/50 eliminate two incorrect answers (cost 30{" "}
            <i class="fas fa-coins"></i>)
          </li>
          <li>
            If you still don't know the answer you can ASK an Expert,
            <br /> which will show the correct answer (cost 50{" "}
            <i class="fas fa-coins"></i>)
          </li>
        </ul>
        <h3>
          <span>LET'S GET QUIZZICLE!</span>
        </h3>
        <Link to="/general">
          <button className="playBtn mt-5">Play</button>
        </Link>
      </div>
      <Link to="/">
        <button type="button" className="backBtn">
          Back to home
        </button>
      </Link>
    </div>
  );
};

export default About;
