function fruitShop (input){
    let product = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    let price = 0;
    let flag = true;


    switch(product){
        case 'banana':
            if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday'){
                price = 2.50;
            } else if (day === 'Saturday' || day === 'Sunday'){
                price = 2.70;
            } else {
                console.log('error');
                flag = false;
            }
            break;
            case 'apple':
                if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday'){
                    price = 1.20;
                } else if (day === 'Saturday' || day === 'Sunday'){
                    price = 1.25;
                }else {
                    console.log('error');
                    flag = false;
                }
            break;
            case 'orange':
                if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday'){
                    price = 0.85;
                } else if (day === 'Saturday' || day === 'Sunday'){
                    price = 0.90;
                }else {
                    console.log('error');
                    flag = false;
                }
            break;
            case 'grapefruit':
                if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday'){
                    price = 1.45;
                } else if (day === 'Saturday' || day === 'Sunday'){
                    price = 1.60;
                }else {
                    console.log('error');
                    flag = false;
                }
            break;
            case 'kiwi':
                if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday'){
                    price = 2.70;
                } else if (day === 'Saturday' || day === 'Sunday'){
                    price = 3;
                }else {
                    console.log('error');
                    flag = false;
                }
            break;
            case 'pineapple':
                if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday'){
                    price = 5.50;
                } else if (day === 'Saturday' || day === 'Sunday'){
                    price = 5.60;
                }else {
                    console.log('error');
                    flag = false;
                }
            break;
            case 'grapes':
                if(day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Tuesday' || day === 'Friday'){
                    price = 3.85;
                } else if (day === 'Saturday' || day === 'Sunday'){
                    price = 4.20;
                }else {
                    console.log('error');
                    flag = false;
                }
            break;
            default:
                console.log('error');
                flag = false;
                break;



    }
    if (flag){
    let result = price * quantity;
    console.log(result.toFixed(2));
    }

}
fruitShop(["apple",
"Workday",
"2"])
