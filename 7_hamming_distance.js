/* 7 (binary) */
function binaryHammingDistance(firstNumber, secondNumber) // O(?), Om(1)
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
	const firstNumberWord = firstNumber.toString(10);
	const secondNumberWord = secondNumber.toString(10);	

	if(firstNumberWord.length !== secondNumberWord.length){
		throw new Error('numbers must be of the same length.')
	}

	let hammingDistance = 0;

	for(let i = 0; i < firstNumberWord.length; i++){
		if(firstNumberWord[i] !== secondNumberWord[i]) {
			hammingDistance++;
		}
	}

	return hammingDistance;
}