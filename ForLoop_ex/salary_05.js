function salary(input){
    let index = 0;
    let openedTabs = Number(input[index]);
    index++;
    let salary = Number(input[index]);
    index++;
    let flag = true;
    
     for (let i = 1; i <= openedTabs; i++) {
        let website = input[index];
        index++;
        if (website === 'Facebook'){
            salary -= 150;
        } else if (website === 'Instagram'){
            salary -= 100;
        } else if (website === 'Reddit'){
            salary -= 50;
        }
        if (salary <= 0){
            console.log('You have lost your salary.');
            flag = false;
            break;
        }

     }
     if (flag){
        console.log(Math.trunc(salary));
     }

}
salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])
