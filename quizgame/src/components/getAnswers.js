//function which takes a string and an array and returns an array with shuffled elements
//used to shuffle the correct and incorrect answers before displaying them
export const getAnswers = (str, arr) => {
  let newArr = [];
  newArr.push(str, ...arr);

  for (var i = newArr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = newArr[i];
    newArr[i] = newArr[j];
    newArr[j] = temp;
  }

  return newArr;
};
