const defaultR = 0;
let currentResult = defaultR;

function getUserInput() {
  return parseInt(userInput.value);
}
function createWrite(operator,resultBefore,calcNumber){
    const calcDesc=`${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDesc);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult=currentResult;
  currentResult += enteredNumber;
  createWrite('+',initialResult,enteredNumber)
}
function sub(){
    const enteredNumber = getUserInput();
    const initialResult=currentResult;
    currentResult -= enteredNumber;
    createWrite('-',initialResult,enteredNumber)
  }
function division(){
    const enteredNumber = getUserInput();
    const initialResult=currentResult;
    currentResult /= enteredNumber;
    createWrite('/',initialResult ,enteredNumber)
  }
function multiply(){
    const enteredNumber = getUserInput();
    const initialResult=currentResult;
    currentResult *= enteredNumber;
    createWrite('*',initialResult ,enteredNumber )
  }
addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", sub);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", division);
