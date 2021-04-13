import React from "react";
import { connect } from "react-redux";

const GeneralKnowledge = (props) => {
  console.log(props.data.data);
  console.log(props.data.status);

  return (
    <h1>{props.data.data[0].question}</h1>
  );
  
};

const mapStateToProps = (state) => {
  return {
    data: state.resultGeneralQuestions,
  };
};

export default connect(mapStateToProps)(GeneralKnowledge);
