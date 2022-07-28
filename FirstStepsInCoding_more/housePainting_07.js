function house(input) {
    let x = Number(input[0]); //height of the house
    let y = Number(input[1]); //length of the house
    let h = Number(input[2]); //height of the triangle wall of the roof
    let sideWallArea = x * y;
    let windowArea = 1.5 * 1.5;
    let sideWallsTotal = sideWallArea * 2 - windowArea * 2;

    let frontBackWallsArea = x * x;
    let frontDoor = 1.2 * 2;
    let frontBackWallsTotal = frontBackWallsArea * 2 - frontDoor;

    let totalArea = sideWallsTotal + frontBackWallsTotal;
    let greenPaint = totalArea / 3.4;

    let sideWallsRoof = 2 * (x * y);
    let triangleWallsRoof = 2 * ((x * h) / 2);
    let totalAreaRoof = sideWallsRoof + triangleWallsRoof;
    let redPaint = totalAreaRoof / 4.3;
    console.log(`${greenPaint.toFixed(2)}\n${redPaint.toFixed(2)}`)





}
house(['10.25', '15.45', '8.88'])