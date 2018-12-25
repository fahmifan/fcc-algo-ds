function filteredArray(arr, elm) {
  let newArr = [];
  // change code below this line
  for(let i = 0; i < arr.length; i++) {
    let isContainElm = arr[i].includes(elm)
    if(isContainElm) {
      // remove from array
      arr.splice(i, 1)
      // after splice the next element will be step back
      // so, we need to decrement the current index
      i--
    }
  }

  newArr = [...arr]

  // change code above this line
  return newArr;
}

module.exports = {
  filteredArray
}