

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
			td.innerHTML = i + ',' + j;
			arr[i][j].el = td;
			tr.appendChild(td)
		} 
	}
	parent.appendChild(table)
}








console.log(createArr(10, 10));
renderTable(document.body, createArr(10, 10));

