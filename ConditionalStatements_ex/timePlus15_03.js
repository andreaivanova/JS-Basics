function time(input){
    let hour = Number(input[0]);
    let min = Number(input[1]);
    let totalMin = hour * 60 + min;
    let newTotalMin = totalMin + 15;
    let newHour = Math.floor(newTotalMin / 60);
    let newMin = newTotalMin %  60;
    if (newHour == 24){
        newHour = 0;
    }
   if(newMin < 10){
    console.log(`${newHour}:0${newMin}`);
   } else {
    console.log(`${newHour}:${newMin}`);

   }



}
time(["1", "46"])