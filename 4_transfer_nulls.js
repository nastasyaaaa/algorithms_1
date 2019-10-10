/* 4 */
function transferNulls(array) // O(n), Om(1)
{
	for(let i = array.length - 1; i >= 0; i--) { 

		if(array[i] === 0) {

			array.splice(i, 1);
			array.push(0);
		}

	}

	return array;
}