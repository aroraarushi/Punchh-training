//pop
var numbers = [1,2,3,4,5,6,7,8,9,10];
console.log(numbers.pop());

console.log(numbers);

//push
numbers.push(11,12);
console.log(numbers);

//reduce
var numbers = [175,50,25];
console.log(numbers.reduce((total,num) => total-num));

//reduceRight
console.log(numbers.reduceRight((total,num) => total-num));


//reverse
console.log(numbers.reverse());

//shift
console.log(numbers.shift());
console.log(numbers);

//slice
var fruits = ["Banana", "Grapes","Orange", "Apple", "Mango"];
console.log(fruits.slice(1,3));

console.log(fruits.slice(-4,-2));

//some
function checkEvenNumber(numbers){
    return (numbers%2==0);
}

console.log(numbers.some(checkEvenNumber));

function check(numbers){
    return numbers>18;
}

console.log(numbers.some(check));

//sort
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

var numbers = [100,56,23,98,12,434];
console.log(numbers.sort(function(a, b){
    return a-b
}));

console.log(numbers.sort(function(a, b){
    return b-a
}));

//splice
fruits.splice(2,0,"Kiwi");
console.log(fruits);

fruits.splice(2,2);
console.log(fruits);

fruits.splice(2,1,"Kiwi");
console.log(fruits);

//toString 
console.log(numbers.toString());

//unshift
numbers.unshift(20);
console.log(numbers);


//Object
const person = {
    firstName:"Arushi",
    lastName:"Arora",
    age:22
};

console.log(person["firstName"]+" "+person["lastName"]+" "+person["age"]);

//creating an empty object and then adding properties
const person1 ={};
person1.firstName = "Arushi";
person1.lastName = "Arora";
person1.age = 22;

console.log(person1.firstName+" "+person1.lastName+" "+person1.age);

//using new Object
const person2 = new Object();
person2.firstName = "Arushi";
person2.lastName = "Arora";
person2.age = 22;

console.log(person2.firstName+" "+person2.lastName+" "+person2.age);

// for in loop
const personDetails = {
    firstName:"Arushi",
    lastName:"Arora",
    age:22
};

for(let x in personDetails ){
    console.log(personDetails[x]);
}

//adding new properties
personDetails.country = "India";

console.log(personDetails.firstName+" "+personDetails.lastName+" "+personDetails.age+" "+personDetails.country);

//deleting properties
delete personDetails.country;

console.log(personDetails.firstName+" "+personDetails.lastName+" "+personDetails.age+" "+personDetails.country);

//nested object

const obj = {
    name : "Arushi",
    age : 22,
    hobbies : {
        hobby1 : "drawing",
        hobby2 : "crafting"
    }
}

console.log(obj.hobbies.hobby2);

//nested array and objects
const obj1 = {
    name: "Arushi",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
}

for (let i in obj1.cars) {
    console.log(obj1.cars[i].name );
    for (let j in obj1.cars[i].models) {
      console.log(obj1.cars[i].models[j]);
    }
}

//object methods
const Details = {
    firstName: "Arushi",
    lastName: "Arora",
    age: 22,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(Details.fullName());

//adding method to an object
person.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.name());

//object.values
console.log(Object.values(person2));

//JSON.strinify
console.log(JSON.stringify(person1));

//stringify dates

const obj2 ={
    name : "Arushi",
    today : new Date()
}

console.log(JSON.stringify(obj2));

//stringify functions
const obj3 = {
    name: "Arushi",
    age: function ()
     {return 30;}
};
obj3.age = obj3.age.toString();
console.log(JSON.stringify(obj3));

  
//object.keys
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(Object.keys(fruits));

var fruit = "Grapes";
console.log(Object.keys(fruit));

//prototype
function personDetail(firstName,lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

personDetail.prototype.age = 22;
const p= new personDetail("Arushi","Arora");

console.log(p.age);

//toString
const str = person2.toString()
console.log(str);







