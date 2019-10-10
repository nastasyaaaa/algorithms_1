/* 1 */
function binarySearch(array, search) // O(log(n)), Om(1)
{
	let start = 0
	let end = array.length - 1;

	while( start <= end ) {
		let middle = Math.floor((start + end) / 2);

		if(search === array[middle]) { return true; }
		else if(search < array[middle]) { end = middle - 1; }
		else { start = middle + 1; }
	}

	return false;
}