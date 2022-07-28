function gameOfIntervals(input) {
	let rounds = Number(input[0]);
	let index = 1;
	let invalidCount = 0;
	let result = 0;
	let zeroToNine = 0;
	let tenTo19 = 0;
	let twentyTo29 = 0;
	let thirtyTo39 = 0;
	let fortyTo50 = 0;
	for (let i = 0; i < rounds; i++) {
		let num = Number(input[index]);
		index++;
		if (num < 0 || num > 50) {
			invalidCount++;
			result /= 2;
		} else if (num >= 0 && num <= 9) {
			zeroToNine++;
			result += num * 0.2;
		} else if (num >= 10 && num <= 19) {
			tenTo19++;
			result += num * 0.3;
		} else if (num >= 20 && num <= 29) {
			twentyTo29++;
			result += num * 0.4;
		} else if (num >= 30 && num <= 39) {
			thirtyTo39++;
			result += 50;
		} else if (num >= 40 && num <= 50) {
            fortyTo50++;
            result += 100;
		}
	}
    invalidCount = (invalidCount / rounds) * 100;
    zeroToNine =(zeroToNine / rounds) * 100;
    tenTo19 = (tenTo19 / rounds) * 100;
    twentyTo29 = (twentyTo29 / rounds) * 100;
    thirtyTo39 = (thirtyTo39 / rounds) * 100;
    fortyTo50 = (fortyTo50 / rounds) * 100;
    
    console.log(result.toFixed(2));
    console.log(`From 0 to 9: ${zeroToNine.toFixed(2)}%`);
    console.log(`From 10 to 19: ${tenTo19.toFixed(2)}%`);
    console.log(`From 20 to 29: ${twentyTo29.toFixed(2)}%`);
    console.log(`From 30 to 39: ${thirtyTo39.toFixed(2)}%`);
    console.log(`From 40 to 50: ${fortyTo50.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidCount.toFixed(2)}%`);


}
gameOfIntervals(['10','43','57','-12','23','12','0','50','40','30','20']);
