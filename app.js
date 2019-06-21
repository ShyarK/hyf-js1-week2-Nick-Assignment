// Array manipulation
//  The following function contains three arguments, the number that we want to add, 
// the number we want to remove and the array.
// Used the filter method which is an array method to filter out the numbers that are not equal to the 
// number that we want to remove.
// The concat method concatenates values to an array.
// I chained a push method, but only the length of the array is returned as the result of the call. I don't know why??!!
const addAndRemoveItems = (itemRemoved, itemAdded, arr) => arr.filter(num => num !== itemRemoved).concat(itemAdded);

console.log(addAndRemoveItems(3, 100, [5, 3, 2, 9, 19, 20, 3, 5]));




// Make an array of pet objects, this pet object should include animal 
// name animal weight animalSound - the animal sound should be a function that 
// console logs the sound the animal makes (meow, moo, oink) loop through the array and 
// print out the animal sound and name.

const pets = [
    {
        name: 'cat',
        weight: '4.5 kg',
        speak: () => {
            return "meow";
        }
    },
    {
        name: 'elephant',
        weight: '6,000 kg',
        speak: () => {
            return "trumpet";
        }
    },
    {
        name: 'duck',
        weight: '136 kg',
        speak: () => {
            return "quack";
        }
    },
];

// The map() method creates a new array with the results of the name value and calling the function inside the object.
const petsNameAndSound = pets.map((pet, i) => { 
    return `${i+1}-Name: ${pet.name}\n  Sound: ${pet.speak()}\n\n`;
}).join('');


console.log(petsNameAndSound);


// String Manipulation

// Arguement: 'Hello, it is a good day, I eat good bananas, I do not like the word good'
//  remove the word 'good' from the string
//g is a global search.
//i is a case-insensitive search.

const removeWords1 = (str, regex) => newStr = str.replace(regex, '');
console.log(removeWords1('Hello, it is a Good day, I eat good bananas, I do not like the word good', /good/gi));


//Conditionals
// Write a program that prints out, 
// in reverse order, every multiple of 3 between 1 and 200. output should be 198 195 192 ......

// -first solution:
const numbers = [];

const countdown1 = num => {
    for (let i = num; i > 0; i--){
        numbers.push(i); 
        if (i % 3 === 0) {
            console.log(i); 
        }
    }
    return numbers;
}

countdown1(200);

//-Second solution: 

const countdown2 = numbers.filter(num => num % 3 === 0);

console.log(countdown2);






