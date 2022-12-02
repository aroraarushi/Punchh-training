//destructuring array
let list = [10,20,30];
let [first_number,second_number,third_number]=list;
console.log(first_number);
console.log(second_number);
console.log(third_number);

//ignoring values in destructuring
let [a, ,c]=list;
console.log(a,c);

//default values
let [x=50, y=70] = [100]; 
console.log(x);  
console.log(y);  

//using rest operator
var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];  
let [color1,color2,...restcolors] = colors; 
console.log(color1);   
console.log(color2);
console.log(restcolors); 

//array returning from a function
let numbers = (list) => {  
    return list;  
}  
   
let [value1, value2, value3] = numbers(list);  
console.log(value1); 
console.log(value2); 
console.log(value3); 

// nested array destructuring
let array=[100,200,300,400,[500,600]];
let[a1,a2,a3,a4,[a5,a6]] = array;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
