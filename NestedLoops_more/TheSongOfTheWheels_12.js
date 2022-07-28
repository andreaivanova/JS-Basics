function wheels(input) {
    let output = ``;
    let mControlValue = Number(input[0]);
    let countPasswords = 0;
    let correctPassword = 0;
    let flag = false;
    for (let a = 1; a <= 9; a++) {
        for (let b = 1; b <= 9; b++) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 1; d <= 9; d++) {
                    if (a < b && c > d && a * b + c * d == mControlValue) {
                        output += `${a}${b}${c}${d} `;
                        countPasswords++;
                        flag = true;
                        if (countPasswords == 4) {
                            correctPassword = `${a}${b}${c}${d}`; //конкатенация на цифри
                            
                        }

                    }
                }
            }
        }

    }
    if (flag) {
        console.log(output);
        
    }
    if (!flag || countPasswords < 4){
        console.log('No!');
    } else {
        console.log(`Password: ${correctPassword}`);
    }




}
wheels(['110'])