
var a = 6;
var b = 9;


a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);

a = 6;
b = 9;

console.log('A before --> ' + a);
a = a ^ b;
console.log('A after --> ' + a);
console.log('B before --> ' + b);
b = a ^ b;
console.log('B after --> ' + b);
console.log('A final before --> ' + a);
a = a ^ b;
console.log('A final after --> ' + a);
