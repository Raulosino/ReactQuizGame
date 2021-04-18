//fetching general knowledge data
export const getGeneralKnowledge = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
              //console.log(data);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching celebrities data
export const getCelebrities = () => {
  return new Promise((resolve, reject) => {
    fetch("https://opentdb.com/api.php?amount=13&category=26&difficulty=easy")
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching films data
export const getFilms = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching geography data
export const getGeography = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching history data
export const getHistory = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching music data
export const getMusic = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching sports data
export const getSports = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=40&category=21&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching television data
export const getTv = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=50&category=14&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};

//fetching vehicles data
export const getVehicles = () => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://opentdb.com/api.php?amount=15&category=28&difficulty=easy&type=multiple"
    )
      .then((response) => {
        if (response.status === 200) {
          response
            .json()
            .then((data) => {
              resolve(data.results);
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          reject(response.status);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
};
