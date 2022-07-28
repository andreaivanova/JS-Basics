function clock() {
	for (let i = 0; i <= 23; i++) {
		for (let j = 0; j <= 59; j++) {
			for (let k = 0; k <= 59; k++) {
				console.log(`${i} : ${j} : ${k}`);
			}
		}
	}
}
clock();
