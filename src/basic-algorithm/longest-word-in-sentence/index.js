function findLongestWordLength(str) {
  const strArr = str.split(' ')
  const longestWord = strArr.reduce((longestWord, nextWord) => {
    if(longestWord.length < nextWord.length) {
      longestWord = nextWord
    }

    return longestWord
  });

  return longestWord.length
}

module.exports = {
  findLongestWordLength
}