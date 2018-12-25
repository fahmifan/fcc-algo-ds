/**
 * getIndexToIns return the lowest index at which a value (second argument) 
 * should be inserted into an array (first argument) once it has been sorted. 
 * 
 * For example, getIndexToIns([1,2,3,4], 1.5) should return 1 
 * because it is greater than 1 (index 0), but less than 2 (index 1).
*/
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  if(arr.length == 0) return 0
  
  arr.sort((a, b) => a - b)
  for(let i = 0; i < arr.length; i++) {
    if(num <= arr[i]) return i
  }

  return arr.length
}

getIndexToIns([10, 20, 30, 40, 50], 35);