import { combineReducers } from 'redux'


let generalQuestions = {

    data: []
}

let geographyQuestions = {

    data: []
}

let celebritiesQuestions = {
    data:[]
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

const geographyReducer = (resultGeography = geographyQuestions, action) => {

    switch (action.type) {
        case 'START':
            geographyQuestions = { data: [], status: 'START' }
            return { ...geographyQuestions }
        case 'SUCCESS':
            geographyQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...geographyQuestions }
        case 'FAILED':
            geographyQuestions = { data: [], status: 'FAILED' }
            return { ...geographyQuestions }
        default:
            return resultGeography
    }

}

const celebritiesReducer = (resultCelebrities = celebritiesQuestions, action) => {

    switch (action.type) {
        case 'START':
            celebritiesQuestions = { data: [], status: 'START' }
            return { ...celebritiesQuestions }
        case 'SUCCESS':
            celebritiesQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...celebritiesQuestions }
        case 'FAILED':
            celebritiesQuestions = { data: [], status: 'FAILED' }
            return { ...celebritiesQuestions }
        default:
            return resultCelebrities
    }

}

export default combineReducers({
    resultGeneralQuestions: generalKnowledgeReducer,
    resultGeography: geographyReducer,
    resultCelebrities: celebritiesReducer
})