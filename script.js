// Создаём массив данных
function createArr(width, height) {
	let arr = [] 
		for(let i = 0; i < width; i++) {
			arr[i] = []
			for(let j = 0; j < height; j++) {
				arr[i][j] = {
					i,
					j,
					value: 'empty',
				}
			}
		}
	return arr
}


// Создаем таблицу поля для игры
function createTable(parent, arr) {
	const table = document.createElement('table');
	table.classList.add('table');
	for(let i = 0; i < arr.length; i++) {
		const tr = document.createElement('tr');
		tr.classList.add('tr');
		for(let j = 0; j < arr.length; j++) {
			const td = document.createElement('td');
			td.innerHTML = 0;
			tr.appendChild(td)
			td.classList.add('td');		
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}

// Функция заполнения

function filling(arr) {
	arr.flat().forEach(cell => console.log(cell, cell.i, cell.j, cell.value))
}


let arr = createArr(5, 5);
createTable(document.body, arr);
filling(arr)


