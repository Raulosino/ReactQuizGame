import { combineReducers } from 'redux'


let generalQuestions = {

    data: []
}

const generalKnowledgeReducer = (resultGeneralQuestions = generalQuestions, action) => {

    switch (action.type) {
        case 'START':
            generalQuestions = { data: [], status: 'START' }
            return { ...generalQuestions }
        case 'SUCCESS':
            generalQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...generalQuestions }
        case 'FAILED':
            generalQuestions = { data: [], status: 'FAILED' }
            return { ...generalQuestions }
        default:
            return resultGeneralQuestions
    }

}


let musicQuestions = {
    data: []
}


const musicReducer = (resultmusicQuestions = musicQuestions, action) => {

    switch (action.type) {
        case 'START':
            musicQuestions = { data: [], status: 'START' }
            return { ...musicQuestions }
        case 'SUCCESS':
            musicQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...musicQuestions }
        case 'FAILED':
            musicQuestions = { data: [], status: 'FAILED' }
            return { ...musicQuestions }
        default:
            return resultmusicQuestions
    }

}


let filmQuestions = {
    data: []
}


const filmReducer = (resultfilmQuestions = filmQuestions, action) => {

    switch (action.type) {
        case 'START':
            filmQuestions = { data: [], status: 'START' }
            return { ...filmQuestions }
        case 'SUCCESS':
            filmQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...filmQuestions }
        case 'FAILED':
            filmQuestions = { data: [], status: 'FAILED' }
            return { ...filmQuestions }
        default:
            return resultfilmQuestions
    }

}


export default combineReducers({
    resultGeneralQuestions: generalKnowledgeReducer,
    resultGeneralQuestions: musicReducer,
    resultfilmQuestions: filmReducer
})


