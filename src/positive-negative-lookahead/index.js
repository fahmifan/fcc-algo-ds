let sampleWord = "bana12";
// there should be 5 character and in the character
// there are at least 3 alphabet & followed by 2 number
let pwRegex = /(?=\w{5,})(?=\D{3,}\d{2,})/; // Change this line

module.exports = {
    pwRegex
}