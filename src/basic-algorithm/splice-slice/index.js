/**
 * copy each element of the first array into the second array, in order.
 * begin inserting elements at index n of the second array.
 * 
 * usage example: frankenSplice([1, 2, 3], [4, 5, 6], 1);
 * will return [4,1,2,3,5,6]
 */
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!  
  // insert new array from index `n`
  const mergedArr = [...arr2]
  mergedArr.splice(n, 0, ...arr1)

  return mergedArr
}

module.exports = {
  frankenSplice
}