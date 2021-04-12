import React from 'react'
import { connect } from 'react-redux';


const GeneralKnowledge = (props) => {

    return (
        <div>
            {props.data}
        </div>
    )
}



const mapStateToProps = (state) => {
    return ({
        data: state.resultGeneralQuestions
    })
}

export default connect(mapStateToProps)(GeneralKnowledge)
