//JSON

var person =  JSON.parse('{"name":"Arushi","age":"22","city":"Jaipur"}');
console.log(person.name);
console.log(person["age"]);

const fruits = '["Apple","Grapes","Kiwi"]';
console.log(JSON.parse(fruits));

//converting string into date
var person =  JSON.parse('{"name":"Arushi","birth":"2000-11-21","city":"Jaipur"}');
person.birth  = new Date(person.birth);
console.log(person);
console.log(person.birth);

//reviver function
var person1 = '{"name":"Arushi","birth":"2000-11-21","city":"Jaipur"}'
const obj = JSON.parse(person1,function(key,value){
    if(key == "birth"){
        return new Date(value);
    }
    else{
        return value;
    }
});

console.log(obj.name+","+obj.birth);

//stringify
var person2 = {"name":"Arushi","birth":"2000-11-21","city":"Jaipur"}
const obj1 = JSON.stringify(person2);
console.log(obj1)


const fruit = ["Apple","Grapes","Kiwi"];
console.log(JSON.stringify(fruit));

//stringify dates
const obj3 = {name: " Arushi",today: new Date()};
console.log(JSON.stringify(obj3));

//stringify functions

//JSON.stringify will remove any functions from a javascript object,both key and value
const obj4= {name: "Arushi", age: function () {return 22;}, city: "Jaipur"};
console.log(JSON.stringify(obj4));

//This can be omitted if we convert the functions into strings before running the JSON.stringify function.
console.log(JSON.stringify(obj4.age.toString()));

//looping an object

for(const x in person){
  console.log(x);
}

let text = "";
for(const x in person){
    text += person[x]+", ";
}
console.log(text);

//array in objects
const details = '{"name":"Arushi","age":22,"hobbies":["drawing","crafting"]}';
const obj5 = JSON.parse(details);
console.log(obj5.hobbies[0]);

//looping through array
let x=" ";
for (let i in obj5.hobbies) {
    x += obj5.hobbies[i]+", ";
}
console.log(x);