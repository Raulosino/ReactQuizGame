import React from "react";
import { connect } from "react-redux";

const GeneralKnowledge = (props) => {

  console.log(props.data.data);
  console.log(props.data.status);

  
    //<h1>{props.data.data[0].question}</h1>
    switch (props.data.status){
        case 'START':
            return <h2>LOADING...</h2>
        case 'FAILED':
            return <h2>FAILED</h2>
        case 'SUCCESS':
            return (
                <h1>{props.data.data[0].question}</h1>
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
