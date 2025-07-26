const math=require('./mathutils');
const h=require('./app/hello');
const num1 =10;
const num2 =10;
hello();
console.log(`addition of ${num1} and ${num2}:`,math.add(num1,num2));
console.log(`subtract of ${num1} and ${num2}:`,math.subtract(num1,num2));