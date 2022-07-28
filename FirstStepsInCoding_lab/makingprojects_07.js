function projects(input) {
    let name = input[0];
    let projects = input[1];
    let takenHours = projects * 3;
    console.log(`The architect ${name} will need ${takenHours} hours to complete ${projects} project/s.`)


}
projects(['Ivan', 9]);