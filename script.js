// Section wise pass or fail check + Grade Calculate.
const abcSchool = [
    [35, 23, 45, 80, 95],
    [53, 32, 54, 78, 89],
    [10, 10, 34, 54, 60],
    [11, 22, 33, 44, 56],
];
for(let i = 0; i <= 3; i++){
    if(i == 0){
        console.log("Section A: ");
    }
    if(i == 1){
        console.log("Section B: ");
    }
    if(i == 2){
        console.log("Section C: ");
    }
    if(i == 3){
        console.log("Section D: ");
    }
    console.log(abcSchool[i].join(', '));
}
console.log("All operatios are operated from these data.");
console.log('--------------------');
for(let i = 0; i <= 3; i++){
    if(i == 0){
        console.log("Section: A");
        console.log("============");
    }
    if(i == 1){
        console.log("Section: B");
        console.log("============");
    }
    if(i == 2){
        console.log("Section: C");
        console.log("============");
    }
    if(i == 3){
        console.log("Section: D");
        console.log("============");
    }
    for(let j = 0; j <= 4; j++){
        if(abcSchool[i][j] >= 33){
            if(abcSchool[i][j] >= 80){
                console.log(`A+: ${abcSchool[i][j]}`);
            }
            else if(abcSchool[i][j] >= 70){
                console.log(`A: ${abcSchool[i][j]}`);
            }
            else if(abcSchool[i][j] >= 60){
                console.log(`A-: ${abcSchool[i][j]}`);
            }
            else if(abcSchool[i][j] >= 50){
                console.log(`B: ${abcSchool[i][j]}`);
            }
            else if(abcSchool[i][j] >= 40){
                console.log(`C: ${abcSchool[i][j]}`);
            }
            console.log(`Passed: ${abcSchool[i][j]}`);
        }else{
            console.log(`Failed(F): ${abcSchool[i][j]}`);
        }
    }
}
console.log('------------------------------');
// Write a function that takes an array of numbers as input and returns the sum of all the elements in the array that are greater than 10.
let sumationOnCondition = (array) => {
    let sum = 0;
    array.filter((value) => {
        if(value > 10){
            sum += value;
        }
    })
    return sum;
}
let myarray = [4, 6, 16, 32, 5];
console.log(myarray.join('-'));
console.log(("Sumation among that are greater than 10: " + sumationOnCondition(myarray)));

// Take an array of numbers in a function as a parameter and push a new values multipled by 2 in the same array 
const mby2 = (array) => {
    array.forEach((value, index, array) => {
       array[index] = value * value;
    })
    return array;
}
let myArray = [2, 4, 6, 8, 10];
console.log("Current Data: " + myArray.join('-'));
console.log("Squared Data: " + mby2(myArray).join('-'));

// Random problems 
const bio = {
    name: "Muntasir Pranto",
    age: 24,
    Prfession: "Software Engineer",
    skilled: "Web Developing",
    bestTeacher: true
};
for(let i in bio){
    console.log(`${i}: ${bio[i]}`);
}
