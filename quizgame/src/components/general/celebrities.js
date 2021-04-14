import React, { useState } from "react";
import { connect } from "react-redux";
import { getAnswers } from "../getAnswers";

const Celebrities = (props) => {
  const [state, setState] = useState({ index: 0 });

  console.log(props.data.data);
  console.log(props.data.status);

  let index = state.index;

  let newAnswers = [];

  const checkAnswer = (e) => {
    let answer = e.currentTarget.id;
    console.log(answer);
    if (answer === props.data.data[index].correct_answer) {
      document.getElementById(`${answer}`).style.backgroundColor = "green";
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.backgroundColor = "red";
      });
    } else {
      document.getElementById(
        `${props.data.data[index].correct_answer}`
      ).style.backgroundColor = "green";
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.backgroundColor = "red";
      });
    }
  };

  const goToNext = () => {
    document
      .querySelectorAll("li")
      .forEach((elem) => (elem.style.backgroundColor = "white"));
    if (state.index === props.data.data.length - 1) {
      setState({ index: 0 });
    } else setState({ index: state.index + 1 });
  };

  switch (props.data.status) {
    case "START":
      return <h2>LOADING...</h2>;
    case "FAILED":
      return <h2>FAILED</h2>;
    case "SUCCESS":
      return (
        <>
          <h1>{props.data.data[index].question}</h1>
          {
            (newAnswers = getAnswers(
              props.data.data[index].correct_answer,
              props.data.data[index].incorrect_answers
            ).map((elem, idx) => (
              <li key={idx} id={elem} onClick={(e) => checkAnswer(e)}>
                {elem}
              </li>
            )))
          }
          <button onClick={goToNext}>Next Question</button>
        </>
      );
    default:
      return null;
  }
};

const mapStateToProps = (state) => {
  return {
    data: state.resultCelebrities,
  };
};

export default connect(mapStateToProps)(Celebrities);
