function hospital (input){
    let index = 0
    let period = Number(input[index]);
    index++;
    let doctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;
    let treatedPerDay = 0;
    let untreatedPerDay = 0;

     for (let i = 1; i <= period; i++) {
        let patientsPerDay = Number(input[index]);
        index++;
        if (i % 3 === 0 && untreatedPatients > treatedPatients){
            doctors++;
        }
       
        if (patientsPerDay <= doctors){
            treatedPatients += patientsPerDay;
        } else {
            untreatedPerDay = patientsPerDay - doctors;
            treatedPerDay = patientsPerDay - untreatedPerDay;
            untreatedPatients += untreatedPerDay;
            treatedPatients += treatedPerDay;
           
        }
        
     }
     console.log(`Treated patients: ${treatedPatients}.`);
     console.log(`Untreated patients: ${untreatedPatients}.`);


}
hospital(['6','25','25','25','25','25','2'])