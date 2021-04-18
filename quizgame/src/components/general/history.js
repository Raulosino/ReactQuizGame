import React, { useState } from "react";
import { connect } from "react-redux";
import { getAnswers } from "../getAnswers";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { updateScore } from "../../actions";

import winning from "../../sounds/Game-show-winning.mp3";
import wrong from "../../sounds/Wrong-answer-sound-effect.mp3";
import click from "../../sounds/Mouse_Click_1-fesliyanstudios.com.mp3";

const History = (props) => {
  //declaring the state for the index
  const [state, setState] = useState({ index: 0 });

  console.log(props.data.data);
  console.log(props.data.status);

  let index = state.index;

  //declaring sound variables
  let winningSound = new Audio(winning);

  let wrongAnswerSound = new Audio(wrong);

  const soundPlay = new Audio(click);

  const audioPlay = () => {
    soundPlay.play();
    soundPlay.volume = 0.1;
  };

  let newAnswers = [];

  //function for ask a friend option (showing only the correct answer)
  const askFriend = () => {
    audioPlay();
    props.data.data[index].incorrect_answers.map((elem) => {
      document.getElementById(`${elem}`).style.display = "none";
      document.getElementById(
        `${props.data.data[index].correct_answer}`
      ).style.background = "green";
    });
    props.dispatch(updateScore(-50));
  };

  //function for 50/50 option (removes 2 incorrect answers)
  const getHelp = () => {
    audioPlay();
    const newArr = [];
    props.data.data[index].incorrect_answers.map((elem) => {
      newArr.push(elem);
    });
    document.getElementById(`${newArr[0]}`).style.display = "none";
    document.getElementById(`${newArr[1]}`).style.display = "none";
    props.dispatch(updateScore(-30));
  };

  //function to check if the clicked answer is correct, changing the style and adding sounds
  const checkAnswer = (e) => {
    let answer = e.currentTarget.id;
    console.log(answer);
    if (answer === props.data.data[index].correct_answer) {
      document.getElementById(`${answer}`).style.background = "green";
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.background = "red";
      });
      props.dispatch(updateScore(100));
      winningSound.play();
      winningSound.volume = 0.1;
    } else {
      document.getElementById(
        `${props.data.data[index].correct_answer}`
      ).style.background = "green";
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.background = "red";
      });
      props.dispatch(updateScore(-10));
      wrongAnswerSound.play();
      wrongAnswerSound.volume = 0.1;
    }
  };

  //function to go to the next question when the button is clicked
  const goToNext = () => {
    audioPlay();
    document.querySelectorAll("button").forEach((elem) => {
      elem.style.background =
        "repeating-linear-gradient( 45deg, #ffc800, #ffc800 5px, #ffc200 5px, #ffc200 10px)";
      elem.style.display = "block";
    });
    if (state.index === props.data.data.length - 1) {
      setState({ index: 0 });
    } else setState({ index: state.index + 1 });
  };

  //switch case for rendering data
  switch (props.data.status) {
    case "START":
      return <h2>LOADING...</h2>;
    case "FAILED":
      return <h2>FAILED</h2>;
    case "SUCCESS":
      return (
        <div className="genKnowledge historyBg generalBg">
          <Container className="mt-5">
            <div className="mainContainer">
              <div className="headingBox">
                <h2
                  className="text-center"
                  dangerouslySetInnerHTML={{
                    __html: props.data.data[index].question,
                  }}
                />
              </div>
              <Row>
                <Col lg={3}>
                  <div className="guy guyHistory"></div>
                </Col>
                <Col lg={7} className="genContainer">
                  {
                    //map through the array with both correct and incorrect answers and display them randomly
                    (newAnswers = getAnswers(
                      props.data.data[index].correct_answer,
                      props.data.data[index].incorrect_answers
                    ).map((elem, idx) => (
                      <button
                        key={idx}
                        id={elem}
                        //onclick function to check if the clicked answer is correct
                        onClick={(e) => checkAnswer(e)}
                        block
                        className="game-button orange outlineBtn"
                      >
                        <span
                          className="text-center"
                          dangerouslySetInnerHTML={{ __html: elem }}
                        />
                      </button>
                    )))
                  }
                  {/* button to go to the next question */}
                  <Button onClick={goToNext} className="" id="nextBtn">
                    Next
                  </Button>
                </Col>
              </Row>
            </div>
          </Container>
          {/*ask a friend option */}
          <div onClick={askFriend} className="helpBtn" id="askFriend">
            <i class="fas fa-user fa-2x"></i>
          </div>
          {/*50/50 option */}
          <div onClick={getHelp} className="helpBtn" id="help50">
            {" "}
            50/50
          </div>
          <Link to="/general">
            {/*back to categories page */}
            <div className="backBtn" onClick={audioPlay}>
              Categories
            </div>
          </Link>
        </div>
      );
    default:
      return null;
  }
};

//using mapStateToProps to get the data from the Redux store
const mapStateToProps = (state) => {
  return {
    data: state.resultHistoryQuestions,
  };
};

//connect the component with the Redux store
export default connect(mapStateToProps)(History);
