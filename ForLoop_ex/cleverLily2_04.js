function cleverLily(input){
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let pricePerOneToy = Number(input[2]);
    let money = 0;
    let toys = 0;
    let brother = 0;
    let evenBirthdaysCount = 1;
    let currentMoney = 10;
     for (let i = 1; i <= age; i++) {
        
        if (i % 2 === 0){
            money += currentMoney
            currentMoney += 10;
            brother++;
        } else {
            toys++;
        }
     }
     money += (toys * pricePerOneToy) - brother;
     let diff = Math.abs(money - washingMachinePrice);
     if (money >= washingMachinePrice){
        console.log(`Yes! ${diff.toFixed(2)}`);
     } else {
         console.log(`No! ${diff.toFixed(2)}`);
     }

}
cleverLily(["21",
"1570.98",
"3"])
