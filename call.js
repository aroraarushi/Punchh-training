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

console.log(employee.details.call(employee1, "Manager", "4 years"));