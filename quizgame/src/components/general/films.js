import React from 'react'
import { connect } from 'react-redux'


const Films = () => {
    return (
        <div>
            
        </div>
    )
}


const mapStateToProps = (state) => {
    return ({
        data: state.resultfilmQuestions
    })
}


export default connect(mapStateToProps)(Films);
