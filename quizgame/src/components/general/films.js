import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getAnswers } from "../getAnswers";
import { updateScore } from '../../actions';
import winning from "../../sounds/Game-show-winning.mp3";
import wrong from "../../sounds/Wrong-answer-sound-effect.mp3";

const Films = (props) => {

  const [state, setState] = useState({ index: 0 });

  console.log(props.data.data);
  console.log(props.data.status);

  let index = state.index;

  let winningSound = new Audio(winning);

  let wrongAnswerSound = new Audio(wrong);

  let newAnswers = [];

  const checkAnswer = (e) => {
    let answer = e.currentTarget.id;
    console.log(answer);
    if (answer === props.data.data[index].correct_answer) {
      document.getElementById(`${answer}`).style.backgroundColor = "green";
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.backgroundColor = "red";
      });
      props.dispatch(updateScore(100));
      winningSound.play();
    } else {
      document.getElementById(`${props.data.data[index].correct_answer}`).style.backgroundColor = "green"
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.backgroundColor = 'red'
      })
      props.dispatch(updateScore(-10));
      wrongAnswerSound.play();
    }
  };

  const goToNext = () => {
    document.querySelectorAll('button').forEach(elem => elem.style.backgroundColor = 'rgb(228, 163, 41)')
    if (state.index === props.data.data.length - 1) {
      setState({ index: 0 })
    } else setState({ index: state.index + 1 })
  };

  switch (props.data.status) {
    case 'START':
      return <h2>LOADING...</h2>
    case 'FAILED':
      return <h2>FAILED</h2>
    case 'SUCCESS':
      return (
        <div className='genKnowledge filmsBg generalBg'>
          <Container className="mt-5">
            <div className="mainContainer">
              <div className="headingBox">
                <h2 className="text-center" dangerouslySetInnerHTML={{ __html: props.data.data[index].question, }} />
              </div>
              <Row>
                <Col lg={3}>
                  <div className="guy guyFilms"></div>
                </Col>
                <Col lg={7} className="genContainer">
                  {newAnswers = getAnswers(props.data.data[index].correct_answer, props.data.data[index].incorrect_answers).map((elem, idx) =>
                    <Button key={idx} id={elem} onClick={(e) => checkAnswer(e)} block className="genBtn"><span className="text-center" dangerouslySetInnerHTML={{ __html: elem }} /></Button>
                  )}
                  <div className=" d-flex justify-content-between mt-5 col-centered">
                    <Link to="/general"><Button className='backBtn'>Back</Button></Link>
                    <Button onClick={goToNext} className="nextBtn">Next</Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>

        </div>
      )
    default:
      return null;
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.resultFilmQuestions,
  };
};

export default connect(mapStateToProps)(Films);
