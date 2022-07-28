function wedding(input){
    let output = ``;
    let men = Number(input[0]); //2
    let women = Number(input[1]); //2
    let maximumTables = Number(input[2]); //6
    let count = 0;
     for (let i = 1; i <= men; i++) {
          for (let j = 1; j <= women; j++) {
              if (count == maximumTables){
                break;
            }
            count++;
            output += `(${i} <-> ${j}) `;


          }
     } console.log(output);


    }
wedding(['5','8','40'])
