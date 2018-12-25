/**
 * largetOfFour return array with largest element from each subArray
 * @param {Array} arr 
 */
function largestOfFour(arr) {
  const largestArr = arr.reduce((biggestArr, currArr) => {
    // when init, bigEl = first element of currArr
    biggestArr.push(
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