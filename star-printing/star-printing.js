"use strict";

function getInput() {
  let inputNumber = prompt("Please enter a number.");

  if (!Number(inputNumber)) {
    return getInput();
  }

  return inputNumber;
}

function getStar1(inputNumber) {
  let result = "";

  for (let i = 0; i < inputNumber; i++) {
    for (let j = 0; j < i + 1; j++) {
      result += "*";
    }
    result += "<br/>";
  }
  return result;
}

function getStar2(inputNumber) {
  let result = "";

  for (let i = inputNumber; 0 < i; i--) {
    for (let j = 0; j < i; j++) {
      result += "*";
    }
    result += "<br/>";
  }
  return result;
}

function getStar3(inputNumber) {
  if (inputNumber % 2 === 1) {
    let result = "";

    //STAR : 2(i+1)-1
    //BLANK : 2inpuntNumber-1 - STAR = 2inputNumber-1-(2i+2-1) = 2inputNumber-2i-2

    for (let i = 0; i < inputNumber; i++) {
      for (let j = 0; j < inputNumber - i - 1; j++) {
        result += "&nbsp";
      }
      for (let k = 0; k < 2 * i + 1; k++) {
        result += "*";
      }
      for (let m = 0; m < inputNumber - i - 1; m++) {
        result += "&nbsp";
      }
      result += "<br/>";
    }

    inputNumber--;

    for (let i = inputNumber; 0 < i; i--) {
      for (let j = inputNumber - i + 1; 0 < j; j--) {
        result += "&nbsp";
      }
      for (let k = 2 * i - 1; 0 < k; k--) {
        result += "*";
      }
      for (let m = inputNumber - i + 1; 0 < m; m--) {
        result += "&nbsp";
      }
      result += "<br/>";
    }

    inputNumber++;
    return result;
  }
}

function getStar4(inputNumber) {
  if (inputNumber % 2 === 1) {
    console.log("실행중2");
    let result = "";
    for (let i = 0; i < inputNumber; i++) {
      if (i === 0 || i === inputNumber - 1) {
        for (let j = 0; j < inputNumber; j++) {
          result += "*";
        }
      } else {
        result += "*";
        for (let k = 0; k < inputNumber - 2; k++) {
          result += "&nbsp";
        }
        result += "*";
      }
      result += "<br/>";
    }
    return result;
  }
}

function displayResult() {
  let inputNumber = getInput();
  document.getElementById("result1").innerHTML = getStar1(inputNumber);
  document.getElementById("result2").innerHTML = getStar2(inputNumber);
  document.getElementById("result3").innerHTML = getStar3(inputNumber);
  document.getElementById("result4").innerHTML = getStar4(inputNumber);
}

displayResult();

document.querySelector("button").addEventListener("click", displayResult);
