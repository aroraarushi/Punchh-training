//concat
const arr1 = ["A", "N"];
const arr2 = ["C", "D", "E"];
const arr3 = ["F"];
const arr4 = [1, 2, 3];
const arr5= arr1.concat(arr2, arr3,arr4);
console.log(arr5);

const arr6 = [1, 2, [3, 4]];
const arr7 = [[5, 6], 7, 8];
const arr8 = arr6.concat(arr7);
console.log(arr8);

//copyWithin
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);

var fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruit.copyWithin(2, 0, 2);
console.log(fruit)

//entries
var fruit = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
const f = fruit.entries();
for(let x of f){
    console.log(x)
}

//every
var numbers = [2,4,6,8,10,12];
console.log(numbers.every(checkEvenNumber));

function checkEvenNumber(numbers){
    return (numbers%2==0)
}

//fill
console.log(numbers.fill(3,2,4));

//filter
var numbers = [1,-1,2,3,4]
var filtered = numbers.filter(function(value){
    return value>=0;
});
console.log(filtered);

//find
var number = numbers.find((elem,index,arr)=>{
    console.log(`${elem},index no ${index} and ${arr}`);
    return elem > 1;
});
console.log(number);

//findIndex
var numberIndex = numbers.findIndex((elem)=>{
    return elem > 1;
});
console.log(numberIndex);

//forEach
var nums = numbers.forEach((n,i,numbers) => {
    console.log(n*2,i,numbers);
});

//from
const str = '1234567';
console.log(Array.from(str));
console.log(Array.from([1,2,3,4,5],x=>x+x));

//includes
console.log(fruit.includes("Mango"));
console.log(fruit.includes("Grapes",2));

//indexOf
var fruit = ["Banana", "Orange", "Apple", "Mango", "Apple"];
console.log(fruit.indexOf("Apple", 1));
console.log(fruit.indexOf("Apple"));

//isArray
console.log(Array.isArray(fruit));
let name = "Arushi";
console.log(Array.isArray(name));

//join
console.log(fruit.join())
console.log(fruit.join(" and "))

//keys
var keys = fruit.keys();
for(let x of keys){
    console.log(x);
}

//lastIndexOf
var fruit = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple"];
console.log(fruit.lastIndexOf("Apple"));
console.log(fruit.lastIndexOf("Apple",4));
console.log(fruit.lastIndexOf("Apple",-2));

//length
var fruit = [ "Apple", "Mango"];
console.log(fruit.length);

//map
const num  = numbers.map(x => x*2);
console.log(num);
