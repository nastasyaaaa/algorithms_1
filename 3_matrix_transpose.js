/* 3 */
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