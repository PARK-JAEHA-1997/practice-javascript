"use strict";

//사용자에게 입력을 받고 숫자인지 검증
// Get input from the user and validate if it's a number
function getInput(){
    let inputNumber = prompt("Please enter a number other than 0.");

    if (!Number(inputNumber)){
        alert("Please enter a number other than 0.");
        return getInput();
    } else {
        inputNumber = Number(inputNumber);
    }

    return inputNumber;
}

//콜라츠 추측 횟수를 측정
// Measure the number of steps for the Collatz conjecture
function getResult(inputNumber){

    function getRandom(){
        let randomNumber = Math.floor(Math.random() * 100000) + 1;
        return randomNumber;
    }

    let randomNumber = getRandom();
//    let randomNumber = 1;
    let multiplyNumber = inputNumber * randomNumber;

    let i = 0;

        while(multiplyNumber !== 1){
            if(multiplyNumber % 2 === 0){
                multiplyNumber /= 2;
                i++;
            }  else {
                multiplyNumber = multiplyNumber * 3 + 1;
                i++;
            }
        }   
    return [inputNumber, randomNumber, i];
}

function getMinimum(){
    let iterationCount = getInput();
    if(iterationCount > 1000){
        alert("You have entered a number that is too large. Please enter a number less than or equal to 1000.");
            return;
        }
    let minimum = Infinity;
    for(let i = 0; i < iterationCount; i++){
        let result = getResult(Math.floor(Math.random() * 100) + 1)[2];
        console.log(result);
        if(minimum > result){
            minimum = result;
        }
    }
    return minimum;
}

function displayMinimumResult(){
    let result = getMinimum();
    document.getElementById("collatz-result").innerHTML=`Minimum number of steps = ${result}`;
}

function displayResult(){
    let result = getResult(getInput());
    document.getElementById("collatz-result").innerHTML=`User input : ${result[0]}<br>
    Random number : ${result[1]}<br>
    Number of steps : ${result[2]}`;
}

    displayResult();

    document.getElementById("calculate-btn").addEventListener("click",displayResult);
    document.getElementById("find-minimum-btn").addEventListener("click",displayMinimumResult);