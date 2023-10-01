document.addEventListener("DOMContentLoaded", ()=> {

    const numberButtons = document.querySelectorAll('.numberButton');
    const operationButtons = document.querySelectorAll('.operationButton');
    const activeDisplay = document.querySelector('.activeDisplay');
    const resultDisplay = document.querySelector('.resultDisplay');
    
    const equalsButton = document.querySelector('.equals');
    const deleteButton = document.querySelector('.delete');
    const clearButton = document.querySelector('.clear');

    numberButtons.forEach(button => {
        button.addEventListener('click', (e)=> {
            const number = e.target.textContent;
            appendNumber(number);
            updateDisplays();
        })

    });

    operationButtons.forEach(button => {
        button.addEventListener('click', (e)=>{
            updateOperation(e.target.textContent);
            updateDisplays();
        } )
    })

    
    let aDisplay = "";
    let rDisplay = "";
    let operator = "";
    
    const updateDisplays = () => {
        activeDisplay.textContent = aDisplay;
        if (operator !== null){
            resultDisplay.textContent = `${rDisplay} ${operator}`;
        }
    };

    function appendNumber (number) {
        if (number === "." && aDisplay.includes(".")) {  
            return; 
        }
        aDisplay += number;
        updateDisplays();

    };

    function updateOperation(selectedOperator){
        if (aDisplay === "") return;
        if (rDisplay !== ""){
            evaluate();
        }
        operator = selectedOperator;
        rDisplay = aDisplay;
        aDisplay = "";
        updateDisplays();
    }

    const evaluate = () => {

        let result = null;

        let firstNum = parseFloat(rDisplay);
        let secondNum = parseFloat(aDisplay);
        console.log("Entering evaluate function");
        console.log("firstNum:", firstNum);
        console.log("operator:", operator);
        console.log("secondNum:", secondNum);
        
        
        if (isNaN(firstNum) || isNaN (secondNum)) return;
         switch (operator){
            case "/":
                result = firstNum / secondNum;
                break
            case "*":
                result = firstNum * secondNum;
                break
             case "+":
                result = firstNum + secondNum;
                break            
             case "-":
                result = firstNum - secondNum;
                break  
            default:
                return      
         }

         aDisplay = result;
         operator = "";
         rDisplay = "";
         updateDisplays();
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
        firstNum = null;
        secondNum = null;
        operator = ""; 
        aDisplay = "";
        rDisplay = "";
        result = null;
        updateDisplays();
    };

    equalsButton.addEventListener('click', evaluate);    
    deleteButton.addEventListener('click', deleteLastInput);
    clearButton.addEventListener('click', clearAll);









});