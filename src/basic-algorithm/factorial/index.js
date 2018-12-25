// factorial return the factorial of number
function factorial(num) {
  // example: num = 3 
  // 3 * factorial(3-1) // 2
  // 3 * 2 * factorial(2-1) // 1
  // 3 * 2 * 1 factorial(1-1) // 0
  // 3 * 2 * 1 * (1) // latest recursion
  // 
  // recursion is using the latest value as params then return it 
  // and use it in the next recursion 
  if(num > 1) return (num * factorial(num - 1))
  
  return 1
}

module.exports = {
  factorial  
}
