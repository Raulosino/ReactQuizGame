import { getGeneralKnowledge, getHistory, getSports } from "../api";

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