/* 4 */
function transferZeros(array) // O(n), Om(1)
{
	let flag = false;
	let lastNonZeroIndex = array.length - 1;

	for(let i = array.length - 1; i >= 0; i--) { 
		if(array[i] !== 0 && !flag) {
			flag = true;
			lastNonZeroIndex = i;
			continue;
		}

		if(array[i] === 0 && flag) {
			array[i] = array[lastNonZeroIndex];
			array[lastNonZeroIndex] = 0;

			lastNonZeroIndex--;
		}

	}

	return array;
}