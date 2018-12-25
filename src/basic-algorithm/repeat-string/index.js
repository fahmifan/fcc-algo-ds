function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num < 0) return ""
  
  let newStr = ""
  for(let i = 0; i < num; i++) {
    newStr += str
  }

  return newStr
}

module.exports = {
  repeatStringNumTimes
}