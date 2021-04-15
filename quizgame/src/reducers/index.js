import { combineReducers } from 'redux'


let generalQuestions = {

    data: [],
    status: ''
}

let geographyQuestions = {

    data: [],
    status: ''
}

let celebritiesQuestions = {
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

let musicQuestions = {
    data: [],
    status: ''
}


const musicReducer = (resultmusicQuestions = musicQuestions, action) => {

    switch (action.type) {
        case 'START_MUSIC':
            musicQuestions = { data: [], status: 'START' }
            return { ...musicQuestions }
        case 'SUCCESS_MUSIC':
            musicQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...musicQuestions }
        case 'FAILED_MUSIC':
            musicQuestions = { data: [], status: 'FAILED' }
            return { ...musicQuestions }
        default:
            return resultmusicQuestions

    }

}


let filmQuestions = {
    data: [],
    status: ''
}


const filmReducer = (resultFilmQuestions = filmQuestions, action) => {

    switch (action.type) {
        case 'START_FILMS':
            filmQuestions = { data: [], status: 'START' }
            return { ...filmQuestions }
        case 'SUCCESS_FILMS':
            filmQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...filmQuestions }
        case 'FAILED_FILMS':
            filmQuestions = { data: [], status: 'FAILED' }
            return { ...filmQuestions }
        default:
            return resultFilmQuestions
    }

}

let historyQuestions = {
    data: [],
    status: ''
}

const historyReducer = (resultHistoryQuestions = historyQuestions, action) => {
    switch (action.type) {
        case "START_HISTORY":

        historyQuestions = { data: [], status: "START" };
        return { ...historyQuestions };
        case "SUCCESS_HISTORY":
        historyQuestions = { data: action.payload, status: "SUCCESS" };
        return { ...historyQuestions };
        case "FAILED_HISTORY":
        historyQuestions = { data: [], status: "FAILED" };
        return { ...historyQuestions };
        default:
            return resultHistoryQuestions;
    }
};

let sportsQuestions = {
    data: [],
    status: ''
}

const sportsReducer = (resultSportsQuestions = sportsQuestions, action) => {
    switch (action.type) {
        case "START_SPORTS":
            sportsQuestions = { data: [], status: "START" };
            return { ...sportsQuestions };
        case "SUCCESS_SPORTS":
            sportsQuestions = { data: action.payload, status: "SUCCESS" };
            return { ...sportsQuestions };
        case "FAILED_SPORTS":
            sportsQuestions = { data: [], status: "FAILED" };
            return { ...sportsQuestions };
        default:
            return resultSportsQuestions;
    }
};



let tvQuestions = {
    data: [],
    status: ''
}


const tvReducer = (resultTvQuestions = tvQuestions, action) => {
    switch (action.type) {
        case "START_TV":
            tvQuestions = { data: [], status: "START" };
            return { ...tvQuestions };
        case "SUCCESS_TV":
            tvQuestions = { data: action.payload, status: "SUCCESS" };
            return { ...tvQuestions };
        case "FAILED_TV":
            tvQuestions = { data: [], status: "FAILED" };
            return { ...tvQuestions };
        default:
            return resultTvQuestions;
    }
};


let vehicleQuestions = {
    data: [],
    status: ''
}

const vehicleReducer = (resultVehicleQuestions = vehicleQuestions, action) => {
    switch (action.type) {
        case "START_VEHICLE":
            vehicleQuestions = { data: [], status: "START" };
            return { ...vehicleQuestions };
        case "SUCCESS_VEHICLE":
            vehicleQuestions = { data: action.payload, status: "SUCCESS" };
            return { ...vehicleQuestions };
        case "FAILED_VEHICLE":
            vehicleQuestions = { data: [], status: "FAILED" };
            return { ...vehicleQuestions };
        default:
            return resultVehicleQuestions;
    }
};

const geographyReducer = (resultGeography = geographyQuestions, action) => {

    switch (action.type) {
        case 'START_GEOGRAPHY':
            geographyQuestions = { data: [], status: 'START' }
            return { ...geographyQuestions }
        case 'SUCCESS_GEOGRAPHY':
            geographyQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...geographyQuestions }
        case 'FAILED_GEOGRAPHY':
            geographyQuestions = { data: [], status: 'FAILED' }
            return { ...geographyQuestions }
        default:
            return resultGeography
    }

}

const celebritiesReducer = (resultCelebrities = celebritiesQuestions, action) => {

    switch (action.type) {
        case 'START_CELEBRITIES':
            celebritiesQuestions = { data: [], status: 'START' }
            return { ...celebritiesQuestions }
        case 'SUCCESS_CELEBRITIES':
            celebritiesQuestions = { data: action.payload, status: 'SUCCESS' }
            return { ...celebritiesQuestions }
        case 'FAILED_CELEBRITIES':
            celebritiesQuestions = { data: [], status: 'FAILED' }
            return { ...celebritiesQuestions }
        default:
            return resultCelebrities
    }

}

let score = 500;

const scoreReducer = (resultScore = score, action) => {
    if(action.type === 'UPDATE_SCORE'){
        console.log(action.payload)
        score = score + action.payload
        console.log(score)
        return score;
    }
    return resultScore;
}


export default combineReducers({
    resultGeneralQuestions: generalKnowledgeReducer,
    resultHistoryQuestions: historyReducer,
    resultSportsQuestions: sportsReducer,
    resultGeography: geographyReducer,
    resultCelebrities: celebritiesReducer,
    resultTv: tvReducer,
    resultVehicle: vehicleReducer,
    resultMusicQuestions: musicReducer,
    resultFilmQuestions: filmReducer,
    resultScore: scoreReducer
})

