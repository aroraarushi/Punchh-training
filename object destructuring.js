var numbers = {x: 100, y: 200};  
console.log(numbers.x,numbers.y);
  
//object destructuring
let student = {firstname: 'Arushi', lastname: 'Arora', rollno: '12'};  
const {firstname, lastname, rollno} = student;  
console.log(firstname); 
console.log(lastname);   
console.log(rollno);   

//assigning new variable names
let {x:newvalue1,y:newvalue2}=numbers;
console.log(newvalue1,newvalue2);

//default values
var {a = 100, b = 200} = {a: 500};  
  
console.log(a); 
console.log(b);

//default values with new variable name
var {a:a1 = 100, b:b1= 200} = {b: 500};  
  
console.log(a1); 
console.log(b1);

//rest operator
var {a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500}  
console.log(a);   
console.log(b);   
console.log(rest);  

//assignment without declaration
var a, b;  
({a,b} = {a: 10, b: 20});   
console.log(a); 
console.log(b);   

//object passing to a function

let show = ({x,y})=>{
    console.log(x);
    console.log(y);
}

show(numbers); 

//object returning from a function
function display(values){
    return values;
}
var {x,y} = display(numbers);
console.log(x);
console.log(y);

//nested object destructuring
var values={a:1,b:2,c:{d:3,e:4}};
var {a,b,c:{d,e}} = values;
console.log(a,b,d,e);

//ignoring keys
var numbers = {x:100,y:200,z:300};

let shownumbers = ({x,z}) => {
    console.log(x);
    console.log(z);
}
shownumbers(numbers);