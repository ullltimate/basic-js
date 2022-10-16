const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain : [], 
  getLength() {
		return this.chain.length
  },
  addLink(value) {
  	if (value === undefined){
    	this.chain.push('()');
    } else {
    	this.chain.push('( '+value+' )');
    }
    return this
  },
  removeLink(position) {
  	if (position <= 0 || Number.isInteger(position) != true || position > this.chain.length || isNaN(position)){
    	this.chain = [];
    	throw new Error("You can\'t remove incorrect link!");
    } else{
    	this.chain.splice(position-1, 1);
    }
    return this
  },
  reverseChain() {
		this.chain.reverse();
    return this
  },
  finishChain() {
    var result = this.chain.join('~~');
    this.chain = [];
		return result
  }
};

module.exports = {
  chainMaker
};
