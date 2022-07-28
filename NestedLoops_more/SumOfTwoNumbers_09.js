function sum(input) {

    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let count = 0;
    let isItFound = false;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            count++;
            if (i + j == magicNumber) {
                console.log(`Combination N:${count} (${i} + ${j} = ${magicNumber})`);
                isItFound = true;
                break;
            }

        }

        if (isItFound){
            break;
        }
    } if (!isItFound) {
        console.log(`${count} combinations - neither equals ${magicNumber}`);
    }


}
sum(['88', '888', '2000'])