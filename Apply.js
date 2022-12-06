let employee = {
    details: function(designation, experience) {
        return this.name+" "+designation+" "+experience;
    }
}
  
let employee1 = {
    name: "A"
}
let employee2 = {
    name: "B"
}

console.log(employee.details.apply(employee1, ["Manager", "4 years"]));

//returning the maximum value
console.log(Math.max.apply(null, [10,20,30]));
console.log(Math.max.apply("", [1,2,3]));
console.log(Math.max.apply(0, [100,200,300]));