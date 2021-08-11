const { inventory } = require('../inventory');
const { problem4 } = require('../problem4');
const { problem5 } = require('../problem5');
let years = problem4(inventory);
let result = problem5(years);
console.log(result);