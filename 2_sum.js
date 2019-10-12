/* sum */

function sum (array, number)  // O(n), Om(n)
{
	let set = new Set();

	for(let i = 0; i < array.length; i++) {
		set.add(array[i]);
	}

	for(let i = 0; i < array.length; i++) {
		if(set.has(number - array[i])) {
			return true;
		}
	}

	return false;
}

console.log(sum([1, 34, 2, -1], 220));