function operations(input) {
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let symbol = input[2];
    let result = 0;
    if (symbol === '+') {
        result = n1 + n2;
        if (result % 2 == 0) {
            console.log(`${n1} + ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} + ${n2} = ${result} - odd`);
        }
    } else if (symbol === '-') {
        result = n1 - n2;
        if (result % 2 == 0) {
            console.log(`${n1} - ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} - ${n2} = ${result} - odd`);
        }
    } else if (symbol === '*') {
        result = n1 * n2;
        if (result % 2 == 0) {
            console.log(`${n1} * ${n2} = ${result} - even`);
        } else {
            console.log(`${n1} * ${n2} = ${result} - odd`);
        }
    } else if (symbol === '/'){
        if (n2 == 0){
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = n1 / n2;
            console.log(`${n1} / ${n2} = ${result.toFixed(2)}`);
        }
    } else if (symbol === '%'){
        if (n2 == 0){
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            result = n1 % n2;
            console.log(`${n1} % ${n2} = ${result}`);
        }
    }


}
operations(["7",
"3",
"*"])



