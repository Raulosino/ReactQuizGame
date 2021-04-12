

import { getGeneralKnowledge, getCelebrities, getGeography, getHistory, getSports, getTv, getVehicles } from '../api';


export const getDataGeneral = () => {
  return (dispatch) => {
    dispatch({
      type: "START",
      payload: null,
    });
    getGeneralKnowledge()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED",
          payload: error,
        });
      });
  };
};

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

export const getDataHistory = () => {
  return (dispatch) => {
    dispatch({
      type: "START",
      payload: null,
    });
    getHistory()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED",
          payload: error,
        });
      });
  };
};

export const getDataSports = () => {
  return (dispatch) => {
    dispatch({
      type: "START",
      payload: null,
    });
    getSports()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED",
          payload: error,
        });
      });
  };
};


export const getDataTv = () => {
  return (dispatch) => {
    dispatch({
      type: "START",
      payload: null,
    });
    getTv()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED",
          payload: error,
        });
      });
  };
};


export const getDataVehicle = () => {
  return (dispatch) => {
    dispatch({
      type: "START",
      payload: null,
    });
    getVehicles()
      .then((data) => {
        dispatch({
          type: "SUCCESS",
          payload: data,
        });
        console.log(data);
      })
      .catch((error) => {
        dispatch({
          type: "FAILED",
          payload: error,
        });
      });
  };
};

