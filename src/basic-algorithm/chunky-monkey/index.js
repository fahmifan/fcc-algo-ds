/**
 * chunkArrayInGroups splits an array (first argument) into 
 * groups the length of size (second argument) 
 * and returns them as a two-dimensional array.
 */
function chunkArrayInGroups(arr, size) {
  // Break it up.
  let newArr = []
  // if size = 2; i=0, i=2, i=4
  let count = 0
  for(let i = 0; i < arr.length; i+=size) {
    let groupedArr = []
    
    // j will be `size` step ahead
    // if i = 4; size = 2; j = 4,5
    for(let j = i; j < i+size; j++) {
      if(arr[j] != undefined) groupedArr.push(arr[j])
    }
    console.log(groupedArr)

    newArr[count] = [...groupedArr]
    count++
  }
  
  console.log(newArr)

  return newArr;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);