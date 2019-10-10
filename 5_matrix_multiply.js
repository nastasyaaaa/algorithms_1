/* 5 */
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
