/* sum */

function sum (array, number)  // O(n ^ 2), Om(1)
{
	for(let i = 0; i < array.length; i++) {
		
		for(let j = i + 1; j < array.length; j++) {

			if(array[i] + array[j] === number) {
				console.log(array[i] + '+' + array[j] + ' = ' + number);
				return true;
			}
		}
	
	}

	return false;
}

console.log(sum([1, 34, 2, -1], 220));