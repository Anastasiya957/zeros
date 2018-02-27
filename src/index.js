module.exports = function getZerosCount(number) {
  // your implementation
  let numOfFive = 0;
  let p = 5;
	
  while (p <= number) {
  	numOfFive += Math.floor(number/p);
	p *= 5;
  }
  return numOfFive;
}
