 function add(a,b){
    return a + b;
}
 function subt(a,b){
    return a - b;
}
 function mult(a,b){
    return a * b;
}
 function divided(a,b){
    return a / b;
}
var userInput_67 = 12345678910;

function mainOnClick(){
let userInput_1 = parseFloat(document.getElementById('firstInput').value || 0);
let userInput_2 = parseFloat(document.getElementById('secondInput').value || 0);
let userInput_3 = document.getElementById('opreator').value || 0 .trim();
let userInput_4 = document.getElementById('result');
let finalResult = 0;

if(userInput_3 === "+"){
    finalResult = add(userInput_1, userInput_2);
}
  else if(userInput_3 === "-"){
    finalResult = subt(userInput_1, userInput_2);
  }
  else if(userInput_3 === "*"){
    finalResult = mult(userInput_1, userInput_2);
  }
  else if(userInput_3 === "/"){
    finalResult = divided(userInput_1, userInput_2);
  }
  else {
        userInput_4.textContent = "Invalid operator!";
        return;
    }
  userInput_4.textContent = "Result: " + finalResult;
}

