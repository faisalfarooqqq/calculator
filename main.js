
document.addEventListener("DOMContentLoaded", ()=> {
    let firstNum = 0;
    let secondNum = 0;
    let operator = "";
    let inputString = "";
  
    let aDisplay = "";
    
    let result = 0;
    
    const sum = (firstNum,secondNum) => {
       
        return firstNum + secondNum;
    
    };
    
    
    const sub = (firstNum,secondNum) => {
        return firstNum - secondNum;
    
    };
    
    const multiple = (firstNum,secondNum) => {
        return firstNum * secondNum;
    
    };
    
    const divide = (firstNum,secondNum) => {
        if (secondNum === 0){
            return "ERROR! Divide by 0 not allowed.";
        } else{
            return firstNum / secondNum;

        }
       
    };
    
    
    const operate = (firstNum,operator,secondNum) => {
        if (operator === "+"){
            return sum(firstNum,secondNum);
    
        } else if (operator === "-"){
            return sub(firstNum,secondNum);
        } else if (operator === "*"){
            return multiple(firstNum,secondNum);
        } else if (operator === "/"){
            return divide(firstNum,secondNum);
        }
        else {
            console.log("Unknown operator");
            return undefined;
        };
    };

    const digitButtons = document.querySelectorAll('.digit');
    const operatorButtons = document.querySelectorAll('.op');
    const activeDisplay = document.querySelector('.activeDisplay');
    const resultDisplay = document.querySelector('.resultDisplay');
    const equal = document.querySelector('.equal');
    const deleteButton = document.querySelector('.delete');
    const clearButton = document.querySelector('.buttonItem.clear');



    digitButtons.forEach(digit =>{
        digit.addEventListener('click', (e)=> {
            
            aDisplay += e.target.textContent;
            activeDisplay.textContent = aDisplay;
            

        });

    });


    operatorButtons.forEach(op => {
        op.addEventListener('click', (e) => {
            if (operator === "") {
                firstNum = parseFloat(aDisplay);
                operator = e.target.textContent;
                inputString = aDisplay + operator;
                resultDisplay.textContent = inputString;
                aDisplay = "";
                activeDisplay.textContent = "";
            }
        });
    });

    equal.addEventListener('click', () => {
        if (operator !== "") {
            const secondNum = parseFloat(aDisplay);
            result = operate(firstNum, operator, secondNum);
            resultDisplay.textContent = result;
            firstNum = result;
            aDisplay = "";
            inputString = "";
            operator = "";
            activeDisplay.textContent = "";
        }
    });

    deleteButton.addEventListener('click', () => {
        if (aDisplay.length > 0) {
            
            aDisplay = aDisplay.slice(0, -1);
            activeDisplay.textContent = aDisplay;
        }
    });

    clearButton.addEventListener('click', () => {
        aDisplay = ""; 
        activeDisplay.textContent = "0";
        resultDisplay.textContent = "0"; 
        firstNum = 0; 
        secondNum = 0; 
        operator = ""; 
        inputString = ""; 
    });

    

});



