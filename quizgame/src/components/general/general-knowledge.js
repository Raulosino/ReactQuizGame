import React from 'react'
import { connect } from 'react-redux';


const GeneralKnowledge = (props) => {

    return (
        <div>


        </div>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         insert: () => dispatch(getDataGeneral())
//     }
// }

const mapStateToProps = (state) => {
    return ({
        data: state.resultGeneralQuestions
    })
}

export default connect(mapStateToProps)(GeneralKnowledge)
