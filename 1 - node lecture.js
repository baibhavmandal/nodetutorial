console.log('we are using node js');
console.log(__dirname);
console.log(__filename);

const names = require('./module1')
const sayhi = require('./module2')
sayhi (names.jhon);
sayhi (names.emily);