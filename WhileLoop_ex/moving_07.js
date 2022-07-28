function moving(input) {
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let availableSpace = width * length * height;
    let takenSpace = 0;
    let index = 3;
    let inputString = input[index];
    index++;
    let boxes = 0;
    let flag = true;
    while (inputString !== 'Done') {
        boxes = Number(inputString);
        takenSpace += boxes;
        if (takenSpace > availableSpace){
            console.log(`No more free space! You need ${takenSpace - availableSpace} Cubic meters more.`);
            flag = false;
            break;
        }

        inputString = input[index];
        index++;
    }
    if (flag){
        console.log(`${availableSpace - takenSpace} Cubic meters left.`);

    }





}
moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])

