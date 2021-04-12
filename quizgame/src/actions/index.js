import { getGeneralKnowledge } from '../api'

export const getDataGeneral = () => {
    return (dispatch) => {
        dispatch({
            type: 'START',
            payload: null
        })
        getGeneralKnowledge().then(data => {
            dispatch({
                type: 'SUCCESS',
                payload: data
            })
            console.log(data)
        }).catch(error => {
            dispatch({
                type: 'FAILED',
                payload: error
            })
        })
    }
}