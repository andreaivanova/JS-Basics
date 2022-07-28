function sum (input){
    let firstNum = Number(input[0]);
    let index = 1;
    let sum = 0;
    let num = Number(input[index]);
    index++;
    while (sum < firstNum){
    
        sum += num;
 
        num = Number(input[index]);
        index++;
   
    }
    console.log(sum);


}
sum (["100",
"10",
"20",
"30",
"40"])
