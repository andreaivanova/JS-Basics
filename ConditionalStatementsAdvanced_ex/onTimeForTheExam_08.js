function exam(input) {
    let hourExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minArrival = Number(input[3]);

    let timeExam = hourExam * 60 + minExam;
    let timeArrival = hourArrival * 60 + minArrival;
    let diff = Math.abs(timeExam - timeArrival);
    let hour = Math.floor(diff / 60); //also possible to be done with Math.trunc,
    //we only need to remove all the digits after the decimal point
    let min = diff % 60;

    if (timeArrival > timeExam) {
        console.log('Late');
        if (hour > 0) {
            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`);
            } else {
                console.log(`${hour}:${min} hours after the start`);
            }
        } else {
            console.log(`${min} minutes after the start`);
        }
    } else if (timeArrival === timeExam || diff <= 30) {
        console.log('On time');
        if (diff > 0){
            if (hour > 0){
                if (min <10){
                    console.log(`${hour}:0${min} hours before the start`);  
                } else {
                    console.log(`${hour}:${min} hours before the start`);
                }
            } else {
                console.log(`${min} minutes before the start`);
            }


        }
    } else {
        console.log('Early');
        if (hour > 0){
            if (min <10){
                console.log(`${hour}:0${min} hours before the start`);  
            } else {
                console.log(`${hour}:${min} hours before the start`);
            }
        } else {
            console.log(`${min} minutes before the start`);
        }


    }
    }


exam(["11",
"30",
"8",
"12"])

