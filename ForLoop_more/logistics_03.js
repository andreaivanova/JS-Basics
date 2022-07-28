function logistics(input){
    let index = 0;
    let cargoAmount = Number(input[index]);
    index++;
    let bus = 0;
    let truck = 0;
    let train = 0;
    let totalCargo = 0;
  
    
     for (let i = 0; i < cargoAmount; i++) {
        let tonsPerCargo = Number(input[index]);
        index++;
        if (tonsPerCargo <= 3){
            totalCargo += tonsPerCargo
            bus += tonsPerCargo;
        } else if (tonsPerCargo <= 11){
            totalCargo += tonsPerCargo;
            truck += tonsPerCargo;
        } else {
          totalCargo += tonsPerCargo;
          train += tonsPerCargo;
            
        }

     }
     let averageSum = (bus * 200 + truck * 175 + train * 120) / totalCargo;
     let busPercent = bus / totalCargo * 100;
     let truckPercent = truck / totalCargo * 100;
     let trainPercent = train / totalCargo * 100;
     console.log(`${averageSum.toFixed(2)}`);
     console.log(`${busPercent.toFixed(2)}%`);
     console.log(`${truckPercent.toFixed(2)}%`);
     console.log(`${trainPercent.toFixed(2)}%`);
    



}
logistics(['5','2','10','20','1','7'])