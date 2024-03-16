//Modules
var names = require('./names-modules');
console.log(names);

var sayHi = require('./utils-modules');
console.log(sayHi);

require('./mind-grenade-modules'); //if we have function inside a module that we invoke that code will run like this

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);