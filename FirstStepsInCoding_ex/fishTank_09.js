function fish(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);
    let volume = length * width * height;
    let volumeLiters = volume / 1000;
    let neededLiters = volumeLiters * (1 - percent / 100);
    console.log(neededLiters);



}
fish(["105","77","89","18.5"]);


