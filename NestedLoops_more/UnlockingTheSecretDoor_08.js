function door(input) {
    let hundreds = Number(input[0]);
    let tens = Number(input[1]);
    let ones = Number(input[2]);
    for (let i = 2; i <= hundreds; i += 2) {
        for (let j = 2; j <= tens; j++) {
            for (let k = 2; k <= ones; k += 2) {
                if (j == 2 || j == 3 || j == 5 || j == 7){
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }


}
door(['8', '2', '8'])