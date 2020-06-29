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
					counted: width * i + j,
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
			td.innerHTML = '';
			arr[i][j].el = td;
			tr.appendChild(td)
			td.classList.add('td');	
			td.addEventListener('click', () => {
				filling(arr);
			})	
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}

// Функция заполнения

function filling(arr) {
	let cell = ''
	for(let i = 0; i < arr.flat().length; i++) {
		cell = arr.flat()[i].el.classList.add('krest');
		cell = arr.flat()[i].el.innerHTML = 'X';
	}
	return cell
}


let arr = createArr(3, 3 );
createTable(document.body, arr);



