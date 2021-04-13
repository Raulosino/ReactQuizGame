import React from 'react'
import { connect } from 'react-redux';



const Music = () => {
    return (
        <div>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return ({
        data: state.resultmusicQuestions
    })
}


export default connect(mapStateToProps)(Music);
