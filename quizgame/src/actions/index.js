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
