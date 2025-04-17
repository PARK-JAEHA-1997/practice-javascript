//사용자에게 입력을 받고 숫자인지 검증
// Get input from the user and validate if it's a number
function getInput(){
    let inputNumber = prompt("0 이외의 숫자를 입력해주세요");

    if (!Number(inputNumber)){
        alert("0 이외의 숫자를 입력해주세요");
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
        let randomNumber = Math.floor(Math.random()*100000)+1;
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
                multiplyNumber = multiplyNumber*2 +1;
                i++;
            }
        }   
    return [inputNumber, randomNumber, i];
}

while(true){
    let result = getResult(getInput());
    alert(`User input : ${result[0]}
Random number : ${result[1]}
Number of steps : ${result[2]}`);
}