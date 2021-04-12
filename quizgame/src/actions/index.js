import { getGeneralKnowledge, getFilms, getMusic } from '../api'



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


export const getDataMusic = () => {
    return (dispatch) => {
        dispatch({
            type: 'START',
            payload: null
        })
        getMusic().then(data => {
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


export const getDataFilms = () => {
    return (dispatch) => {
        dispatch({
            type: 'START',
            payload: null
        })
        getFilms().then(data => {
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
