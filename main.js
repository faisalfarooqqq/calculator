
document.addEventListener("DOMContentLoaded", ()=> {

    const digitButtons = document.querySelectorAll('.digit');
    const operatorButtons = document.querySelectorAll('.op');
    const activeDisplay = document.querySelector('.activeDisplay');
    
    const equal = document.querySelector('.equal');
    const deleteButton = document.querySelector('.delete');
    const clearButton = document.querySelector('.clear');

    let firstNum = 0;
    let secondNum = 0;
    let operator = ""; 
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


    const updateDisplays = () => {
        activeDisplay.textContent = aDisplay;
        
    };

    const handleDigitClick = (e) => {
        const buttonText = e.target.textContent;
    
        if (buttonText === "." && aDisplay.includes(".")) {
           
            return; 
        }
    
        aDisplay += buttonText;
        updateDisplays();
    };

    const handleOperatorClick = (e) => {
        if (aDisplay !== "") {
            if (firstNum === 0) {
                
                firstNum = parseFloat(aDisplay);
                operator = e.target.textContent;
            } else {
               
                secondNum = parseFloat(aDisplay);
                if (operator !== "") {
                    
                    firstNum = operate(firstNum, operator, secondNum);
                    activeDisplay.textContent = firstNum + e.target.textContent;
                }
                operator = e.target.textContent;
            }
            aDisplay = "";
        }
    };

    const handleEqualClick = () => {
        if (operator !== "") {
            if (aDisplay !== "") {
                secondNum = parseFloat(aDisplay);
                result = operate(firstNum, operator, secondNum);
                firstNum = result;
                aDisplay = result;
                operator = "";
                
                updateDisplays();
            } else if (operator !== "" && secondNum !== 0) {
                
                result = operate(firstNum, operator, secondNum);
                result = firstNum;
                aDisplay = result;
                
                operator = "";
                updateDisplays();
            }
        }
    };

    const deleteLastInput = () => {
        if (aDisplay.length > 0) {
           
            aDisplay = aDisplay.slice(0, -1);
            
        } else if (operator !== "") {
            
            operator = "";
            
        }
        updateDisplays();
    };

    const clearAll = () => {
        firstNum = 0;
        operator = "";
        
        aDisplay = "";
        result = 0;
        updateDisplays();
    };

    digitButtons.forEach(digit => {
        digit.addEventListener('click', handleDigitClick);
    });

    operatorButtons.forEach(op => {
        op.addEventListener('click', handleOperatorClick);
    });

    equal.addEventListener('click', handleEqualClick);
    deleteButton.addEventListener('click', deleteLastInput);

    clearButton.addEventListener('click', clearAll);



});



