//copy by reference
var a = [10,20,30];
var b = a
console.log(a);
console.log(b);
a[0] = 50;
console.log(a);
console.log(b);

//copy by value
var c = [...a,40,50];
console.log(a);
console.log(c);
a[0]=100;
console.log(a);
console.log(c);

//merge arrays
var d = [...a,...c];
console.log(d);

//copy object by value
numbers = {a:10,b:20};
number1=numbers;
console.log(numbers);
console.log(number1);
numbers.a=50;
console.log(numbers);
console.log(number1);

//copy object by reference
number2={...numbers};
console.log(numbers);
console.log(number2);
numbers.a=70;
console.log(numbers);
console.log(number2);
