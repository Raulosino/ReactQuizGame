import { getGeneralKnowledge, getCelebrities, getGeography } from '../api'

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

export const getDataGeography = () => {
    return (dispatch) => {
        dispatch({
            type: 'START',
            payload: null
        })
        getGeography().then(data => {
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

export const getDataCelebrities = () => {
    return (dispatch) => {
        dispatch({
            type: 'START',
            payload: null
        })
        getCelebrities().then(data => {
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