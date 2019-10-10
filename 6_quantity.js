/* 6 */
function quantity(sourceArray, targetArray) // O(n) , Om(n)
{
	let set = new Set();
	let counter = 0;

	for(let i = 0; i < sourceArray.length; i++) {
		set.add(sourceArray[i]);
	}

	for(let i = 0; i < targetArray.length; i++) {
		if(set.has(targetArray[i])) {
			counter++;
		}
	}

	return counter;
}
