import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {getAnswers} from '../getAnswers';

const GeneralKnowledge = (props) => {

  const [state, setState] = useState({index: 0})

  console.log(props.data.data);
  console.log(props.data.status);
  
  let index = state.index

  let newAnswers = []

  const checkAnswer = (e) => {
    let answer = e.currentTarget.id;
    console.log(answer)
    if(answer === props.data.data[index].correct_answer){
      document.getElementById(`${answer}`).style.backgroundColor = "green"
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.backgroundColor = 'red'
      })
    } else {
      document.getElementById(`${props.data.data[index].correct_answer}`).style.backgroundColor = "green"
      props.data.data[index].incorrect_answers.map((elem) => {
        document.getElementById(`${elem}`).style.backgroundColor = 'red'
      })

    }
  }

  const goToNext = () => {

      document.querySelectorAll('button').forEach(elem => elem.style.backgroundColor = 'blue')
      setState({index: state.index+1})
     
  }
  
  switch (props.data.status){
      case 'START':
          return <h2>LOADING...</h2>
      case 'FAILED':
          return <h2>FAILED</h2>
      case 'SUCCESS':
          return (
            <div className = "genKnowledge">
              <Container>
                <Row>
                  <div className="genContainer">
                    <h1 dangerouslySetInnerHTML={{__html: props.data.data[index].question,}}/>
                    {newAnswers = getAnswers(props.data.data[index].correct_answer, props.data.data[index].incorrect_answers).map((elem, idx) => 
                      <Button key={idx} id={elem} onClick={(e) => checkAnswer(e)} block className="genBtn">{elem}</Button>
                    )}
                    <Button onClick={goToNext}>Next Question</Button>
                  </div>
                </Row>
              </Container>
              
            </div>
          )
      default: return null
  }

};

const mapStateToProps = (state) => {
  return {
    data: state.resultGeneralQuestions,
  };
};

export default connect(mapStateToProps)(GeneralKnowledge);
