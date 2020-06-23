// Создание массивов обьектов
function createArr(row, cell) {
	const arr = []
	for(let i = 0; i < row; i++) {
		arr[i] = []
		for(let j = 0; j < cell; j++) {
			arr[i][j] = {
				empty: false,
				i: i,
				j: j,
			}
		}
	}
	return arr
}


function setEmptyCell(cell) {
	cell.empty = true
}



// Генерирование массива в таблицу и вынос на экран
function renderTable(parent, arr) {
	const table = document.createElement('table');
	table.classList.add('table');
	let count = 0
	for(let i = 0; i < arr.length; i++) {
		const tr = document.createElement('tr');
		table.appendChild(tr);
		for(let j = 0; j < arr.length; j++) {
			const td = document.createElement('td');
			td.classList.add('cell');
			td.innerHTML = count;
			arr[i][j].el = td;
			count++
			tr.appendChild(td)
			if(arr[i][j].empty) {
				td.classList.remove('cell');
				td.classList.add('null');
			}
		} 
	}
	parent.appendChild(table)
}




const arr = createArr(3, 3);
setEmptyCell(arr[0][0]);

console.log(arr[0][0])

renderTable(document.body, arr);