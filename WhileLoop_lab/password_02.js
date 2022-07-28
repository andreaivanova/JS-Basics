function password(input){
    let index = 0;
    let username = input[index];
    index++;
    let correctPass = input[index];
    let typedPass = '';
    while(correctPass !== typedPass){
        typedPass = input[index];
        index++;
        
        }
        console.log(`Welcome ${username}!`);

    }
    



password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
