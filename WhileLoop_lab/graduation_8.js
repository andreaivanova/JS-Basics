function graduation (input){
    let index = 0;
    let name = input[index];
    index++;
    let grade = Number(input[index]);
    index++;
    let countGrades = 1;
    let sumGrades = 0;
    let poorGrades = 0;
    while (countGrades <= 12){
        if (grade >= 4){
            poorGrades = 0;
            sumGrades += grade;
            countGrades++;
        } else {
            poorGrades++;
            if (poorGrades > 1){
                console.log(`${name} has been excluded at ${countGrades} grade`);
                break;
        }
        
            
        }
        grade = Number(input[index]);
        index++;

        }

        let averageGrade = sumGrades / 12;
        if (countGrades > 12){
            console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
        }
    }



graduation(["Gosho","5","5.5","6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])