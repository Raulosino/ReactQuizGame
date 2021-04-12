
const getGeneralKnowledge = () => {
    return new Promise((resolve, reject) => {
      fetch("https://opentdb.com/api.php?amount=50&category=9&difficulty=easy&type=multiple")
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
  

const getCelebrities = () => {
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


const getFilms = () => {
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
  

const getGeography = () => {
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
  

const getHistory = () => {
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
  

const getMusic = () => {
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
  

const getSports = () => {
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
  
const getTv = () => {
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
  

const getVehicles = () => {
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