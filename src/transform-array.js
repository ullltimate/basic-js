const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (Array.isArray(arr) === true){
    var arrayClone = arr.slice();
    for (var i=0; i<arrayClone.length; i++){
      if (arrayClone[i] === '--discard-next'){
      		var a = arrayClone.indexOf('--discard-next');
          arrayClone.splice(a, 2);
          if (arrayClone[i] === '--double-prev'){
          	var a = arrayClone.indexOf('--double-prev');
          	arrayClone.splice(a,1)
          }
          if(arrayClone[i] === '--discard-prev'){
          	var a = arrayClone.indexOf('--discard-prev');
          	arrayClone.splice(a,1)
          }
      }
     	if (arrayClone[i] === '--discard-prev'){
      		var a = arrayClone.indexOf('--discard-prev');
          if( a === 0 ){
          	arrayClone.splice(0, 1)
          } else {
          	arrayClone.splice(a-1, 2);
          }
      }
      if (arrayClone[i] === '--double-next'){
      		var a = arrayClone.indexOf('--double-next');
          console.log(a)
          if (a === arrayClone.length - 1){
          	arrayClone.splice(arrayClone.length - 1, 1)
          } else {
            arrayClone[a] = arrayClone[a+1];
          }
      }
      if (arrayClone[i] === '--double-prev'){
      		var a = arrayClone.indexOf('--double-prev');
          if( a === 0 ){
          	arrayClone.splice(0, 1)
          } else {
          arrayClone[a] = arrayClone[a-1];
          }
      }

    }
    return arrayClone;
   } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
   }
}

module.exports = {
  transform
};
