// TEST 2
const array = [1, 2, 2, 3, 4, 6, 7, 8, 6];

function getAllUniqueValue(arr) {
  const sortArray = arr.sort(function (a, b) {
    return a - b;
  });
  let { length } = sortArray;
  const emptyArr = [];
  let temp;

  for (let i = 0; i < length; i++) {
    if (sortArray[i] !== temp) {
      emptyArr.push(sortArray[i]);
      temp = sortArray[i];
    }
  }

  return emptyArr;
}

let newArray = getAllUniqueValue(array);

console.log("newArray", newArray);
