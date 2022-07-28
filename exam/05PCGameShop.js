function pc(input) {
    let index = 0;
    let soldGames = Number(input[index]);
    index++;
    let game = input[index];
    index++;
    let countGames = 1;
    let hearthStone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;


    while(countGames <= soldGames){
        if (game === 'Hearthstone'){
            hearthStone++;
        } else if (game === 'Fornite'){
            fornite++;
        } else if (game === 'Overwatch'){
            overwatch++;
        } else {
            others++;
        }



        game = input[index];
        index++;
        countGames++;
    }
    let percentHearthstone = hearthStone / soldGames * 100;
    let percentFornite = fornite / soldGames * 100;
    let percentOverwatch = overwatch / soldGames * 100;
    let percentOthers = others / soldGames * 100;
    console.log(`Hearthstone - ${percentHearthstone.toFixed(2)}%\nFornite - ${percentFornite.toFixed(2)}%\nOverwatch - ${percentOverwatch.toFixed(2)}%\nOthers - ${percentOthers.toFixed(2)}%`);

}
pc(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])
