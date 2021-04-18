import {
  getGeneralKnowledge,
  getCelebrities,
  getGeography,
  getHistory,
  getSports,
  getTv,
  getVehicles,
  getMusic,
  getFilms,
} from "../api";

//action for getting general knowledge data
export const getDataGeneral = () => {
  return (dispatch) => {
    dispatch({
      type: "START_GENERAL",
      payload: null,
    });
    getGeneralKnowledge()
      .then((data) => {
        dispatch({
          type: "SUCCESS_GENERAL",
          payload: data,
        });
        //console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_GENERAL",
          payload: error,
        });
      });
  };
};

//action for getting geography data
export const getDataGeography = () => {
  return (dispatch) => {
    dispatch({
      type: "START_GEOGRAPHY",
      payload: null,
    });
    getGeography()
      .then((data) => {
        dispatch({
          type: "SUCCESS_GEOGRAPHY",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_GEOGRAPHY",
          payload: error,
        });
      });
  };
};

//action for getting celebrities data
export const getDataCelebrities = () => {
  return (dispatch) => {
    dispatch({
      type: "START_CELEBRITIES",
      payload: null,
    });
    getCelebrities()
      .then((data) => {
        dispatch({
          type: "SUCCESS_CELEBRITIES",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_CELEBRITIES",
          payload: error,
        });
      });
  };
};

//action for getting history data
export const getDataHistory = () => {
  return (dispatch) => {
    dispatch({
      type: "START_HISTORY",
      payload: null,
    });
    getHistory()
      .then((data) => {
        dispatch({
          type: "SUCCESS_HISTORY",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_HISTORY",
          payload: error,
        });
      });
  };
};

//action for getting sports data
export const getDataSports = () => {
  return (dispatch) => {
    dispatch({
      type: "START_SPORTS",
      payload: null,
    });
    getSports()
      .then((data) => {
        dispatch({
          type: "SUCCESS_SPORTS",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_SPORTS",
          payload: error,
        });
      });
  };
};

//action for getting television data
export const getDataTv = () => {
  return (dispatch) => {
    dispatch({
      type: "START_TV",
      payload: null,
    });
    getTv()
      .then((data) => {
        dispatch({
          type: "SUCCESS_TV",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_TV",
          payload: error,
        });
      });
  };
};

//action for getting vehicles data
export const getDataVehicle = () => {
  return (dispatch) => {
    dispatch({
      type: "START_VEHICLE",
      payload: null,
    });
    getVehicles()
      .then((data) => {
        dispatch({
          type: "SUCCESS_VEHICLE",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_VEHICLE",
          payload: error,
        });
      });
  };
};

//action for getting music data
export const getDataMusic = () => {
  return (dispatch) => {
    dispatch({
      type: "START_MUSIC",
      payload: null,
    });
    getMusic()
      .then((data) => {
        dispatch({
          type: "SUCCESS_MUSIC",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_MUSIC",
          payload: error,
        });
      });
  };
};

//action for getting films data
export const getDataFilms = () => {
  return (dispatch) => {
    dispatch({
      type: "START_FILMS",
      payload: null,
    });
    getFilms()
      .then((data) => {
        dispatch({
          type: "SUCCESS_FILMS",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED_FILMS",
          payload: error,
        });
      });
  };
};

//action for updating the score
export const updateScore = (score) => {
  return {
    type: "UPDATE_SCORE",
    payload: score,
  };
};
