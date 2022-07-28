function parking(input) {
    let days = Number(input[0]);
    let hours = Number(input[1]);
    let tax = 0;
    let countDays = 0;
    let totalSum = 0;
    let daySum = 0;
    for (let i = 1; i <= days; i++) {
        countDays++;
        
        daySum = 0;
        for (let j = 1; j <= hours; j++) {
            
            if (i % 2 == 0 && j % 2 !== 0){
                tax = 2.50;
            } else if (i % 2 !== 0 && j % 2==0){
                tax = 1.25
            } else{
                tax = 1;
            }
            daySum += tax;
            totalSum += tax;

            
           
          }
          console.log(`Day: ${countDays} - ${daySum.toFixed(2)} leva`);
    }
    console.log(`Total: ${totalSum.toFixed(2)} leva`);


}
parking(['2','5'])