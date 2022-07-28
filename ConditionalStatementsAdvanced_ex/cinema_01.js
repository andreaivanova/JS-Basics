function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);
    let ticketPrice = 0;
    
    let totalSeats = rows * columns;
    switch (type) {
        case 'Premiere':
            ticketPrice = 12;
            break;
        case 'Normal':
            ticketPrice = 7.50;
            break;
        case 'Discount':
            ticketPrice = 5;
            break;
    }
    
    let profit = ticketPrice * totalSeats;
    console.log(`${profit.toFixed(2)}`);



}
cinema(["Normal",
"21",
"13"])
