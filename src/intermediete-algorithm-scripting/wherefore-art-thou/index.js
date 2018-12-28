/**
 * whatIsInAName looks through an array of objects (first argument) 
 * and returns an array of all objects that have matching name and value pairs (second argument). 
 * Each name and value pair of the source object has to be present 
 * in the object from the collection if it is to be included in the returned array.
 * 
 * example, if the first argument is 
 * `[`
 *  `{ first: "Romeo", last: "Montague" }`, 
 *  `{ first: "Mercutio", last: null }`, 
 *  `{ first: "Tybalt", last: "Capulet" }`
 * `]`, 
 * and the second argument is `{ last: "Capulet" }`,
 * then it return the third object from the array (the first argument),
 * because it contains the name and its value, that was passed on as the second argument.
 */
function whatIsInAName(collection, source) {
  // What's in a name?
  let arr = [];
  // Only change code below this line
  arr = collection.filter(col => {
    // if all of source object not present in an object of 
    // collection, it should filtered
    let isContain = false
       
    return isContain
  })

  if(arr.length === 1) return arr[0]
  
  // Only change code above this line
  return arr;
}

module.exports = {
  whatIsInAName
}