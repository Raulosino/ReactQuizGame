import React from 'react'
import { connect } from "react-redux";
import { getAnswers } from '../getAnswers';

const Tv = (props) => {

    console.log(props.data.data);
    console.log(props.data.status);
    let index = 0;

    let newAnswers = []


    switch (props.data.status) {
        case 'START':
            return <h2>LOADING...</h2>
        case 'FAILED':
            return <h2>FAILED</h2>
        case 'SUCCESS':
            return (
                <>
                    <h1>{props.data.data[index].question}</h1>
                    {newAnswers = getAnswers(props.data.data[index].correct_answer, props.data.data[index].incorrect_answers).map((elem, idx) =>
                        <li key={idx}>{elem}</li>
                    )}
                </>
            )
        default: return null
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.resultTv,
    };
};

export default connect(mapStateToProps)(Tv);
