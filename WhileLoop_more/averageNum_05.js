function averageNumber(input){
    let n = Number(input[0]);
    let index = 1;
    let sum = 0;
     for (let i = 0; i < n; i++) {
        let number = Number(input[index]);
        index++;
        sum += number;


     }
     console.log(`${(sum / n).toFixed(2)}`);

}
averageNumber([
'4',
'95',
'23',
'76',
'23',



])