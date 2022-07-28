function bills(input) {
	let months = Number(input[0]);
	let index = 1;
	let totalExpenses = 0;
	let currentMonthExpenses = 0;
	let totalElectricity = 0;
	let otherExpenses = 0;
    let expensesWithoutOtherExp = 0;
    let totalWater = 0;
    let totalInternet = 0;
    let totalOthers = 0;

	for (let i = 0; i < months; i++) {
		let electricityBill = Number(input[index]);
		index++;
		totalElectricity += electricityBill;
        totalWater += 20;
        totalInternet += 15;
        
        expensesWithoutOtherExp = electricityBill + 20 + 15;
        otherExpenses = expensesWithoutOtherExp + (expensesWithoutOtherExp * 0.2);
        totalOthers += otherExpenses;
		currentMonthExpenses = expensesWithoutOtherExp + otherExpenses;
        totalExpenses += currentMonthExpenses;

	
    }
    let average = totalExpenses / months;
    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOthers.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}
bills(['5','68.63','89.25','132.53','93.53','63.22']);


