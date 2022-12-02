const persons = [
    {firstname : "Arushi", lastname: "Arora"},
    {firstname : "Sakshi", lastname: "Mishra"},
    {firstname : "Rashi", lastname: "Somani"}
];

function getFullName(value) {
    return [value.firstname,value.lastname].join(" ");
}

console.log(persons.map(getFullName));