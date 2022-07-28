function literature(input) {
    let pagesCurrentBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);
    let totalTimeReading = pagesCurrentBook / pagesPerHour;
    let neededHoursADay = totalTimeReading / days;
    console.log(neededHoursADay);


}
literature(['434', '15', '4']);