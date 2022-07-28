function everest(input){
    let index = 0;
    let yesOrNo = input[index];
    index++;
    
    let climbedMeters = 5364;
    let summit = 8848;
  
    let days = 1;
    while(yesOrNo !== 'END'){  
        let metersPerDay = Number(input[index]);
        index++;
        if (yesOrNo === 'Yes'){
            days++;
            
            if (days > 5){

                break;
            }
            climbedMeters += metersPerDay;
            if (climbedMeters >= summit){
                console.log(`Goal reached for ${days} days!`);
                break;
            }

        }
       
        
        


        let yesOrNo = input[index];
        index++;
    }
    if (climbedMeters < summit){
        console.log(`Failed!\n${climbedMeters}`);
    }

}
everest(["Yes",
"535",
"Yes",
"849",
"Yes",
"499",
"Yes",
"400",
"Yes",
"500"])

