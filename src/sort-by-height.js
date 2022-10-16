const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (arr.every((a) => a === -1) === true){
  	return arr
  }
	var arrClone = arr.slice();
  var arrayIndex = [];
  for (var i = 0; i<arrClone.length; i++){
  		var index = arrClone.indexOf(-1);
      if(index === -1){
      	break
      } else {
      	 arrClone.splice(index, 1)
      }
  }
  for (var i = 0; i<arr.length; i++){
  	var index = arr.indexOf(-1, i);
    if (arr[i] === -1){
    	arrayIndex.push(index)
    }
  }
  arrClone.sort((a,b) => a-b);
  for (var i = 0; i<arrayIndex.length; i++){
  	  arrClone.splice(arrayIndex[i], 0, -1)
  }
  return arrClone;
}

module.exports = {
  sortByHeight
};
