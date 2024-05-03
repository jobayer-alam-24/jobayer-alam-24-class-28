// Section wise pass or fail check + Grade Calculate.
const abcSchool = [
    [35, 23, 45, 80, 95],
    [53, 32, 54, 78, 89],
    [10, 10, 34, 54, 60],
    [11, 22, 33, 44, 56],
];

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