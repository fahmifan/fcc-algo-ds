function truncateString(str, maxLength) {
  // Clear out that junk in your trunk
  
  // check if not truncate
  if(str.length <= maxLength) return str

  return str.substring(0, maxLength) + '...';
}

module.exports = {
  truncateString
}