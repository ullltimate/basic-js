const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  var arr = [];
  for (var i=0; i<matrix.length; i++ ){
    for (var j=0; j<matrix[i].length; j++){
      if (matrix[i][j] === "^^"){
      	arr.push(matrix[i][j]);
      }
    }
  }
  return arr.length;
}

module.exports = {
  countCats
};
