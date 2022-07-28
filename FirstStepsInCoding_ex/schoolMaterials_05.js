function school(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let liquid = Number(input[2]);
    let percentDiscount = Number(input[3]);

//•	Пакет химикали - 5.80 лв. 
//  •	Пакет маркери - 7.20 лв. 
//•	Препарат - 1.20 лв (за литър)
let pensPrice = pens * 5.80;
let markersPrice = markers * 7.20;
let liquidPrice = liquid * 1.20;
let totalPrice = pensPrice + markersPrice + liquidPrice;
totalPrice -= totalPrice * percentDiscount / 100;
console.log(totalPrice);


}
school(['2', '3', '4', '25']);