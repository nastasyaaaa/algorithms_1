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


// const res = binarySearch([1,2,4,7,12,23,45,67], 1);
// console.log(res);

function matrixTranspose(matrix) // O(n^2), Om(n)
{
	const rawCount = matrix.length;
	const columnCount = matrix[0].length;
	let transposedMatrix = [];

	for(let i = 0; i < rawCount; i++) {
		for(let j = 0; j < columnCount; j++) {
		
			if(typeof transposedMatrix[j] === 'undefined'){
				transposedMatrix[j] = [];
			}
			
			transposedMatrix[j][i] = matrix[i][j];
		}
	}


	return transposedMatrix;
}


const matrix = [
		[1, 2, 3, 4],
		[5, 6, 7, 8],
		[9, 10, 11, 12]
	];


// let transposed = matrixTransposeReplace(matrix);

// console.log('Дана матрица: ');
// for(let i = 0; i < squareMatrix.length; i++) {
// 	console.log(squareMatrix[i].join('  '));
// }

// console.log('Транcпонированная матрица: ');
// for(let i = 0; i < transposed.length; i++) {
// 	console.log(transposed[i].join('  '));
// }

function matrixMultiply(firstMatrix, secondMatrix)  // O (n ^ 3), Om(n)
{
	if(firstMatrix[0].length !== secondMatrix.length) {
		throw new Error('Число столбцов в первом сомножителе должно быть равно числу строк во втором!');
	}
	let resultMatrix = [];

	for(let i = 0; i < firstMatrix.length; i++) {
			
		resultMatrix[i] = [];

		for(let j = 0; j < firstMatrix[i].length; j++) {
			resultMatrix[i][j] = 0;

			for(let k = 0; k < firstMatrix[i].length; k++) {
				resultMatrix[i][j] += firstMatrix[i][k] * secondMatrix[k][j];
			}

		}
	}

	return resultMatrix;
}

// console.log(matrixMultiply(
// 	[
// 		[1, -1],
// 		[2, 0],
// 		[3, 0]
// 	], 
	
// 	[
// 		[1, 1],
// 		[2, 0]
// 	]));


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

// const array = [1, 3434, 5, 67, 0, 232, 3, 0, 213, -34, 0, 90, -101, 0, 0, 1, 0, 0];

// console.log(transferNulls(array));

/*
Есть два массива цифр А и В. Узнать сколько раз встречается в массиве В числа из массива А.
 Например: А = {1,3,5,1,3,8} B = {1 4 1 4 6 3 7 5} => ответ 4  (2 балла)
*/

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

// console.log(quantity([1, 3, 5, 1, 3, 8], [1, 4, 1, 4, 6, 3, 7, 5, 3, 3, 3, 3, 3, 3]));

function binaryHammingDistance(firstNumber, secondNumber)
{
	const binaryFirstNumber = firstNumber.toString(2);
	const binarySecondNumber = secondNumber.toString(2);
	let distance = 0;

	console.log(firstNumber + " to bin: " + binaryFirstNumber);
	console.log(secondNumber + " to bin: " + binarySecondNumber);

	for(let i = 0; i < binaryFirstNumber.length; i++) {
		if(binaryFirstNumber[i] !== binarySecondNumber[i]) {
			distance++;
		}
	}

	return distance;
}

console.log(binaryHammingDistance(3, 6));