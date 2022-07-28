function trade(input) {
    let town = input[0];
    let sells = Number(input[1]);
    let percent = 0;
    
    switch (town) {
        case 'Sofia':
            if (sells >= 0 && sells <= 500){
                percent = 0.05;
            } else if (sells <= 1000){
                percent = 0.07;
            } else if (sells <= 10000){
                percent = 0.08;
            } else {
                percent = 0.12;
            }
         
            break;
        case 'Varna':
            if (sells >= 0 && sells <= 500){
                percent = 0.045;
            } else if (sells <= 1000){
                percent = 0.075;
            } else if (sells <= 10000){
                percent = 0.1;
            } else {
                percent = 0.13;
            }
            break;
        case 'Plovdiv':
            if (sells >= 0 && sells <= 500){
                percent = 0.055;
            } else if (sells <= 1000){
                percent = 0.08;
            } else if (sells <= 10000){
                percent = 0.12;
            } else {
                percent = 0.145;
            }
            break;
            

    }
    if ((town !== 'Sofia' && town !== 'Varna' && town !== 'Plovdiv') || sells < 0){
        console.log('error');
        
    } else {
        console.log((sells * percent).toFixed(2));
    }




}
trade(["Varna",
"3000"])
