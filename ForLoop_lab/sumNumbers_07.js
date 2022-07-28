function numbersSum(input){
    let receivedInput = input[0];
    let sum = 0;
    for(let i = 0; i <= receivedInput.length - 1; i++){
    let currentSymbol = Number(receivedInput[i]);
    sum += currentSymbol;
    
    }
    console.log(`The sum of the digits is:${sum}`);
  
  
  
  }numbersSum([])