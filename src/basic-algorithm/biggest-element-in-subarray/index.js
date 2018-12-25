/**
 * largetOfFour return array with largest element from each subArray
 * @param {Array} arr 
 */
function largestOfFour(arr) {
  const largestArr = arr.reduce((biggestArr, currArr) => {
    biggestArr.push(
      // get the biggest element in currArr
      // when init, bigEl = first element of currArr
      currArr.reduce((bigEl, nextEl) => {
        if(bigEl < nextEl) bigEl = nextEl
        return bigEl
      })
    )

    return biggestArr
  }, [])

  return largestArr
}

module.exports = {
  largestOfFour
}