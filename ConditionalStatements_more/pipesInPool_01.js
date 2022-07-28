function pipes(input){
    let volumePool = Number(input[0]);
    let firstPipePerHour = Number(input[1]);
    let secondPipePerHour = Number(input[2]);
    let hoursWorkerMissing = Number(input[3]);
    let firstPipeTotalLiters = firstPipePerHour * hoursWorkerMissing;
    let secondPipeTotalLiters = secondPipePerHour * hoursWorkerMissing;
    let totalLiters = firstPipeTotalLiters + secondPipeTotalLiters;
    let fullPercentage = totalLiters / volumePool * 100;
    let p1Percentage = firstPipeTotalLiters / totalLiters * 100;
    let p2Percentage = secondPipeTotalLiters / totalLiters * 100;

    if(totalLiters <= volumePool){
        console.log(`The pool is ${fullPercentage.toFixed(2)}% full. Pipe 1: ${p1Percentage.toFixed(2)}%. Pipe 2: ${p2Percentage.toFixed(2)}%.`);
    } else {
        console.log(`For ${hoursWorkerMissing} hours the pool overflows with ${(totalLiters - volumePool).toFixed(2)} liters.`);
    }



}
pipes(['100','100','100','2.5'])
