/* 7 (binary) */
function binaryHammingDistance(firstNumber, secondNumber) // O(log(max(a,b))), Om(1)
{
	/* 3 = 00000000000000000000000000000011 */
	/* 6 = 00000000000000000000000000000101 */
	/* res 	 = 00000000000000000000000000000110	  (5) */
	let decExclusiveOr = firstNumber ^ secondNumber;
	let hammingDistance = 0;

	while (decExclusiveOr > 0) {
		decExclusiveOr &= decExclusiveOr - 1;
		hammingDistance++;
	}

	return hammingDistance;
}



/* 7 (decimal) */
function decimalHammingDistance(firstNumber, secondNumber) // O(2 * length) = O(length) , Om(1)
{
	let hammingDistance = 0;

	while(Math.trunc(firstNumber) !== 0 || Math.trunc(secondNumber) !== 0) {
		
		let firstRemainder = Math.trunc(firstNumber % 10);
		let secondRemainder= Math.trunc(secondNumber % 10);


		if(firstRemainder !== secondRemainder) {
			hammingDistance++;
		}

		firstNumber /= 10;
		secondNumber /= 10;
	}

	return hammingDistance;
}

console.log(decimalHammingDistance(1234567, 1256968));
