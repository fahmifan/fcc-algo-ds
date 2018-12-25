// `^` will match exactly the arguments after it, that is 
// match numbers that are repeated three times 
// `$` will make it stop immideatly 
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line

module.exports = {
  reRegex
}