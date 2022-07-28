function hotelRoom(input) {
    let month = input[0];
    let nights = Number(input[1]);
    let priceStudioPerNight = 0;
    let priceApartmentPerNight = 0;
    switch (month) {
        case 'May':
        case 'October':
            priceStudioPerNight = 50;
            priceApartmentPerNight = 65;
            if (nights > 7 && nights <= 14) {
                priceStudioPerNight -= priceStudioPerNight * 0.05;
            } else if (nights > 14) {
                priceStudioPerNight -= priceStudioPerNight * 0.30;
            }
            break;
        case 'June':
        case 'September':
            priceStudioPerNight = 75.2;
            priceApartmentPerNight = 68.7;
            if (nights > 14) {
                priceStudioPerNight -= priceStudioPerNight * 0.20;
            }
            break;
        case 'July':
        case 'August':
            priceStudioPerNight = 76;
            priceApartmentPerNight = 77;
            break;

    }
    if (nights > 14){
        priceApartmentPerNight -= priceApartmentPerNight * 0.10;
    }
    let totalPriceStudio = priceStudioPerNight * nights;
    let totalPriceApartment = priceApartmentPerNight * nights;
    console.log(`Apartment: ${totalPriceApartment.toFixed(2)} lv.\nStudio: ${totalPriceStudio.toFixed(2)} lv.`);

}
hotelRoom(["August",
"20"])
