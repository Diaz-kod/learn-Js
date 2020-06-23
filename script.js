

function createArr(row, cell) {
	const arr = []
	for(let i = 0; i < row; i++) {
		arr[i] = []
		for(let j = 0; j < cell; j++) {
			arr[i][j] = {
				passed: false,
				i: i,
				j: j,
			}
		}
	}
	return arr
}


function renderTable(parent, arr) {
	const table = document.createElement('table');
	table.classList.add('table');
	for(let i = 0; i < arr.length; i++) {
		const tr = document.createElement('tr');
		table.appendChild(tr);
		for(let j = 0; j < arr.length; j++) {
			const td = document.createElement('td');
			td.classList.add('cell');
			td.innerHTML = i + ':' + j;
			arr[i][j].el = td;
			tr.appendChild(td)
		} 
	}
	parent.appendChild(table)
}


function spiralPassage(arr) {
	const direct = {
		left: {i: 0, j: -1}, 
		right: {i: 0, j: 1},
		up: {i: -1, j: 0},
		down: {i: 1, j: 0},
	}
	let i = 0;
	let j = 0;
	let counter = 0;
    //  Текущее направление
	let currDirect = 'right';
	while(arr.flat().some(elem => !elem.passed)) {
		arr[i][j].passed = true;
		arr[i][j].el.innerHTML = counter;
		let nextI = i + direct[currDirect].i;
		let nextJ = j + direct[currDirect].j;
		let nextCell = arr[nextI] && arr[nextI][nextJ];	
		if (nextCell !== undefined && nextCell.passed == false) {
			i = nextI;
			j = nextJ;
			counter++
		
		} else {
			currDirect = getNextDirection(currDirect);	
		}
	}
}



function getNextDirection(currDirect) {
	switch(currDirect) {
		case 'right': return 'down';
		case 'down': return 'left';
		case 'left': return 'up';
		case 'up': return 'right';
	}
}






















const table = createArr(10, 10);


renderTable(document.body, table);

spiralPassage(table);