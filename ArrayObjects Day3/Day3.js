//accessors
const person = {
    name : "ABC",
    get details(){
        return this.name;
    },
    set details(input){
        [this.name] = input.split(" ");
    }
}
console.log(person.details);

person.details = "XYZ";

console.log(person.details);


//object constructor
function Student(name,age){
    this.name = name;
    this.age = age;
    this.details = function(){
        return this.name+" "+this.age;
    }
    this.changeName = function(fname){
        this.name = fname;
    }
    this.changeAge= function(nage){
        this.age = nage;
    }
}

let student1 = new Student("ABC",12);
let student2 = new Student("DEF",12);

student2.age=14;

student1.country = "India";

student1.changeAge(13);
student1.changeName("XYZ");

console.log(student1);
console.log(student2);

console.log(student1.details());
console.log(student1.name);

//object protypes
Student.prototype.city = "Jaipur";
Student.prototype.state = "Rajasthan";

console.log(student1.city);

Student.prototype.address = function(){
    return this.city+","+this.state;
};

console.log(student1.address());

//iterables

//for..of
for(const x of "Arushi"){
    console.log(x);
}

for(const x of [1,2,3,4,5]){
    console.log(x);
}

//sets
const letters = new Set(["A","B","C","D","E"]);

//size
console.log(letters.size);

//add
letters.add("F");
letters.add("G");
const h = letters.add("H");
letters.add("A");
letters.add("B");

console.log(letters.size);

//forEach
letters.forEach((letter) => console.log(letter));

//values
console.log(letters.values());

// create an iterator
const iterator = letters.values();

for(let letter of iterator){
    console.log(letter);
}

//keys
console.log(letters.keys());

//entries
const entriesIterator  = letters.entries();

for(let letter of entriesIterator){
    console.log(letter);
}

//typeof

console.log(typeof letters);

//Maps
const fruits = new Map([
    ["apples",500],
    ["grapes",300],
    ["kiwi",200]
]);

console.log(fruits.get("grapes"));

//set
fruits.set("banana",600);
fruits.set("oranges",400);

console.log(fruits.get("oranges"));

fruits.set("grapes",100);
console.log(fruits.get("grapes"));

//size
console.log(fruits.size);

//delete
fruits.delete("apples");
console.log(fruits.size);

//clear
fruits.clear();
console.log(fruits.size);

//has
fruits.set("banana",600);
fruits.set("oranges",400);

console.log(fruits.has("oranges"));

//typeof
console.log(typeof fruits);

//forEach
fruits.forEach((fruits,key) =>console.log(fruits,key));

//entries
for(let fruit of fruits.entries()){
    console.log(fruit);
}

//keys
for(let fruit of fruits.keys()){
    console.log(fruit);
}

//values
for(let x of fruits.values()){
    console.log(x);
}

let sum = 0;
for(let x of fruits.values()){
    sum += x;
}

console.log(sum)

//object as keys
const apples = {name : "apples"};
const grapes = {name : "grapes"};

fruits.set(apples,500);
fruits.set(grapes,200);

console.log(fruits.get("apples"));

console.log(fruits.get(apples));