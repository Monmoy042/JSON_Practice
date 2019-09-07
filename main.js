// javaScript Object
var student = {
    name:"John Doe",
    email:"johnDoe@gmail.com",
    age:22,
    phone:['028001000','01680000000'],
    address:{
        street:"Road No-08",
        city:'Dhaka',
        zipCode:'1616',
    },
};

// Convert javaScript object to JSON data
student = JSON.stringify(student);
console.log(student);
console.log(student.name);

// Convert JSON data to javaScript object
student = JSON.parse(student);
console.log(student);
console.log(student.name);
console.log(student.address.zipCode);

// Array in javaScript
var people =[
    {
        name:'Mr. X',
        age: 22,
    },
    {
        name:'Mr. Y',
        age:24,
    },
    {
        name:'Mr. Z',
        age:25,
    }
];

console.log(people[1]);
console.log(people[2].age);

// Loop in array
let item = '';
for(var i=0;i<people.length;i++){
    // console.log(people[i].name);
    item += '<li>'+people[i].name+'</li>';
    item +='<li>'+people[i].age+'</li>';
}
document.getElementById('people').innerHTML=item;

