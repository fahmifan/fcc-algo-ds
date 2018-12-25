/**
 * titleCase Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
 * @param {String} str 
 */
function titleCase(str) {
  const strArr = str.split(' ')
  console.log(strArr)
  const newWords = strArr
    .map(el => el.charAt(0).toUpperCase() + el.slice(1).toLowerCase())
    .join(' ')

  console.log(newWords)
  return newWords
}

titleCase("I'm a little tea pot");