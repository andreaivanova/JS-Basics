
function vowelLettersSum(input){
    let receivedInput = input[0];
    let sum = 0;
    for(let i = 0; i <= receivedInput.length - 1; i++){
      let currentLetter = receivedInput[i];
      if (currentLetter === 'a'){
          sum += 1;
      } else if (currentLetter === 'e'){
      sum += 2;
      } else if (currentLetter === 'i'){
      sum += 3;
      } else if (currentLetter === 'o'){
      sum += 4;
      } else if (currentLetter === 'u'){
      sum += 5;
      }
          
    }
    console.log(sum);
  
  
  
  }vowelLettersSum('andrea')