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

let historyQuestions = {
    data: []
}

const historyReducer = (resultHistoryQuestions = historyQuestions, action) => {
    switch (action.type) {
        case "START":
        generalQuestions = { data: [], status: "START" };
        return { ...historyQuestions };
        case "SUCCESS":
        generalQuestions = { data: action.payload, status: "SUCCESS" };
        return { ...historyQuestions };
        case "FAILED":
        generalQuestions = { data: [], status: "FAILED" };
        return { ...historyQuestions };
        default:
        return resultHistoryQuestions;
    }
};


export default combineReducers({
    resultGeneralQuestions: generalKnowledgeReducer, 
    resultHistoryQuestions: historyReducer
})