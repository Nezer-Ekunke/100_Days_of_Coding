console.log(countries)
alert('Open the console and check if the countries has been loaded')

//UDEMY CHALLENGE!!!

/*
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

const mark = {
fullName: 'Mark Miller',
mass: 78,
height: 1.69,

calcBMI: function () {
this.bmi = this.mass / (this.height * this.height);
return mark.bmi;

}
};

mark.calcBMI();
console.log(mark.bmi);

const john = {
fullName: 'John Smith',
mass: 92,
height: 1.95,

calcBMI: function () {
this.bmi = this.mass / (this.height * this.height);
return john.bmi;

}
};

john.calcBMI();
console.log(john.bmi);

if (mark.bmi > john.bmi) {
console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else{
console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

//GITHUB CHALLENGE
/*
Create an empty object called dog
Print the the dog object on the console
Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
Get name, legs, color, age and bark value from the dog object
Set new properties the dog object: breed, getDogInfo
*/

//CHALLENGE 1
const dog = {};

//CHALLENGE 2

console.log(dog);

////CHALLENGE 3

dog.name = 'Jasper'
dog.legs = 4
dog.age = 3
dog.color = 'Brown'
dog.bark = true

bark: function (){
 if (bark = true){
return `woof woof`
} else {
return `does not bark`
}

//CHALLENGE 4

console.log(dog.name);
console.log(dog.legs);
console.log(dog.age);
console.log(dog.color);
console.log(dog.bark);

//CHALLENGE 5

dog.breed ='Chihuahua'

getDogInfo = function (){
return `My dog is ${dog.name}, he has ${dog.legs} legs and is ${dog.color} in color. He is ${dog.age} and YES!! it is ${dog.bark} that my dog can bark`;
}

console.log(getDogInfo());

//END OF DAY 8 CHALLENGE
