
export const getGeneralKnowledge = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data.results);
                console.log(data)
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


export const getCelebrities = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=13&category=26&difficulty=easy")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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


  export const getFilms = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=50&category=11&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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
  

export const getGeography = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=50&category=22&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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
  

export const getHistory = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=50&category=23&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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
  

export const getMusic = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=50&category=12&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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
  

export const getSports = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=40&category=21&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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
  
export const getTv = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=50&category=14&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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
  

export const getVehicles = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=15&category=28&difficulty=easy&type=multiple")
        .then((response) => {
          if (response.status === 200) {
            response
              .json()
              .then((data) => {
                resolve(data);
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