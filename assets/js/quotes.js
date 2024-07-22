/* let person={
    fn:'john',
    ln:'hello',
    age: 1,
    location: 'city'
}

console.log(person['fn']);


person['bestfriend']='mike';
console.log(person['bestfriend']);

person['age']=31;
console.log(person['age']);
person.location='spain';
console.log(person.location);
delete person.fn;
console.log(person.fn); */

/*
let car={
location: 'garage',
ignition: 'off',
fueled: 'true',
start: function(){
    this.ignition='on';
}

}
*/

/* console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));
console.log(car.hasOwnProperty('ignition'));
console.log(car.hasOwnProperty('drive'));
console.log(car.toString()); 

console.log(car.ignition);
car.start();
console.log(car.ignition);
*/

/*
let food=['pizza','cola','bread','fruits', 'stir fry'];

for (let i=0; i<food.length; i++){
console.log(food[i]);
} 


let petNames={
    dog: 'Fido',
    cat: 'pinky',
    fish: 'bubbles',
    pythonm: 'sizzelers'
}


for(let i in petNames){
console.log(petNames[i] , 'is a ', i);
}



let pairs=Object.entries(petNames);
for(let pair of pairs){
    console.log(pair[1], 'is a ', pair[0]);
}
*/
function stringeg(){
    console.log('hello world');
}
stringeg();

function printString(message){
console.log(message);
}

printString('sowmya');

function addTwo(num1, num2){
return num1+num2;
}

let result= addTwo(2,3);
console.log(result);