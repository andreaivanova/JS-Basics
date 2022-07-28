function pin(input) {
    let n1 = Number(input[0]); //3
    let n2 = Number(input[1]); //5
    let n3 = Number(input[2]); //5

    for (let i = 2; i <= n1; i += 2) {
        for (let j = 2; j <= n2; j++) {
            for (let k = 2; k <= n3; k += 2) {
                if (j == 2 || j == 3 || j == 5 || j == 7){
                    console.log(i + ' ' + j + ' ' + k);
                }
            }
        }
    }



}
pin(['3','5','5'])