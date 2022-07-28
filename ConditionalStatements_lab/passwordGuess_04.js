function pass(input){
    let password = input[0];
    if ("s3cr3t!P@ssw0rd" === password){
        console.log("Welcome");
    }else {
        console.log("Wrong password!")
    }

}
pass(["s3cr3t!P@ssw0rd"]);