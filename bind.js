let person = {
    firstName:"A",
    lastName: "B",
    fullName: function () {
      console.log( this.firstName + " " + this.lastName);
    }
}
  
let person2 = {
    firstName:"C",
    lastName: "D",
}
  
let fullName = person.fullName.bind(person2);
fullName();



let person3 = {
    name: 'AB',
    getName: function() {
        console.log(this.name);
    }
}

let name = person3.getName.bind(person3);
setTimeout(name, 1000);