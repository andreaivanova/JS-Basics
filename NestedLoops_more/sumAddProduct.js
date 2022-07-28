function sumAddProduct(input) {
   
    let n = Number(input[0]);
    let isFound = false;

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    let sum = a + b + c + d;
                    let mult = a * b * c * d;
                    let division = mult / sum;
                    if (sum === mult && n % 10 === 5) {
                     
                        console.log(`${a}${b}${c}${d}`);
                        isFound = true;
                        return;
                    } else if (Math.trunc(division) === 3 && n % 3 === 0) {
                       
                        console.log(`${d}${c}${b}${a}`);
                        isFound = true;
                        return;
                    }
                }
                
            } 
            
        } 
    }

    if (!isFound){
        console.log('Nothing found');
}
    




}
sumAddProduct(['123'])