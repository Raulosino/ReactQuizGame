import { combineReducers } from 'redux'


let generalQuestions = {

    data: [], 
    status: ''
}

const generalKnowledgeReducer = (resultGeneralQuestions = generalQuestions, action) => {

    switch (action.type) {
        case 'START_GENERAL':
            generalQuestions = { data: [], status: 'START' }
            return { ...generalQuestions }
        case 'SUCCESS_GENERAL':
            generalQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...generalQuestions }
        case 'FAILED_GENERAL':
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

let sportsQuestions = {
    data: [],
}

const sportsReducer = (resultSportsQuestions = sportsQuestions, action) => {
    switch (action.type) {
        case "START":
        generalQuestions = { data: [], status: "START" };
        return { ...sportsQuestions };
        case "SUCCESS":
        generalQuestions = { data: action.payload, status: "SUCCESS" };
        return { ...sportsQuestions };
        case "FAILED":
        generalQuestions = { data: [], status: "FAILED" };
        return { ...sportsQuestions };
        default:
        return resultSportsQuestions;
    }
};


export default combineReducers({
    resultGeneralQuestions: generalKnowledgeReducer, 
    resultHistoryQuestions: historyReducer, 
    resultSportsQuestions: sportsReducer
})