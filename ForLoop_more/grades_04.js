function grades(input) {
    let students = Number(input[0]);
    let index = 1;
    let fail = 0; 
    let fair = 0;
    let good = 0;
    let excellent = 0; 
    let allGradesSum = 0;
     for (let i = 0; i < students; i++) {
         let grade = Number(input[index]);
         index++;
         allGradesSum += grade;
        if (grade >= 2 && grade <= 2.99){
            fail++;
        } else if (grade >= 3 && grade <= 3.99){
            fair++;
        } else if (grade >= 4 && grade <= 4.99){
            good++;
        } else if (grade >= 5){
            excellent++;
        }
     }
     let averageGrade = allGradesSum / students;
     fail = fail / students * 100;
     fair = fair / students * 100;
     good = good / students * 100;
     excellent = excellent / students * 100;
     console.log(`Top students: ${excellent.toFixed(2)}%\nBetween 4.00 and 4.99: ${good.toFixed(2)}%\nBetween 3.00 and 3.99: ${fair.toFixed(2)}%\nFail: ${fail.toFixed(2)}%\nAverage: ${averageGrade.toFixed(2)}`);

//     //Ред 1 -	"Top students: {процент студенти с успех 5.00 или повече}%"
// Ред 2 -	"Between 4.00 and 4.99: {между 4.00 и 4.99 включително}%"
// Ред 3 -	"Between 3.00 and 3.99: {между 3.00 и 3.99 включително}%"
// Ред 4 -	"Fail: {по-малко от 3.00}%"
// Ред 5 -	"Average: {среден успех}"





}
grades([])
