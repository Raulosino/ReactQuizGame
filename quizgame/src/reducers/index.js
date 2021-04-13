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



let tvQuestions = {
    data: []
}


const tvReducer = (resultTvQuestions = tvQuestions, action) => {
    switch (action.type) {
        case "START":
            tvQuestions = { data: [], status: "START" };
            return { ...sportsQuestions };
        case "SUCCESS":
            tvQuestions = { data: action.payload, status: "SUCCESS" };
            return { ...sportsQuestions };
        case "FAILED":
            tvQuestions = { data: [], status: "FAILED" };
            return { ...sportsQuestions };
        default:
            return resultTvQuestions;
    }
};


let vehicleQuestions = {
    data: []
}

const vehicleReducer = (resultVehicleQuestions = vehicleQuestions, action) => {
    switch (action.type) {
        case "START":
            vehicleQuestions = { data: [], status: "START" };
            return { ...sportsQuestions };
        case "SUCCESS":
            vehicleQuestions = { data: action.payload, status: "SUCCESS" };
            return { ...sportsQuestions };
        case "FAILED":
            vehicleQuestions = { data: [], status: "FAILED" };
            return { ...sportsQuestions };
        default:
            return resultVehicleQuestions;
    }
};


export default combineReducers({
    resultGeneralQuestions: generalKnowledgeReducer,
    resultHistoryQuestions: historyReducer,
    resultSportsQuestions: sportsReducer,
    resultGeography: geographyReducer,
    resultCelebrities: celebritiesReducer,
    resultTv: tvReducer,
    resultVehicle: vehicleReducer,
     resultGeneralQuestions: musicReducer,
    resultfilmQuestions: filmReducer
})

