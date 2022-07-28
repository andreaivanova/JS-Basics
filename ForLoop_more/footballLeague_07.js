function football(input) {
	let capacity = Number(input[0]);
	let fans = Number(input[1]);
	let index = 2;
    let aSector = 0;
    let bSector = 0;
    let vSector = 0;
    let gSector = 0;
	for (let i = 0; i < fans; i++) {
		let sector = input[index];
		index++;
		switch (sector) {
			case 'A':
                aSector++;
				break;
			case 'B':
                bSector++;
				break;
			case 'V':
                vSector++;
				break;
			case 'G':
                gSector++;
				break;
		}
	}
     aSector = aSector / fans * 100;
     bSector = bSector / fans * 100;
     vSector = vSector / fans * 100;
     gSector = gSector / fans * 100;
    let percentFans = (fans / capacity) * 100;
    console.log(`${aSector.toFixed(2)}%\n${bSector.toFixed(2)}%\n${vSector.toFixed(2)}%\n${gSector.toFixed(2)}%\n${percentFans.toFixed(2)}%`);

}
football([]);
