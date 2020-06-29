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
				filling(arr, arr[i][j]);
			})	
		}
		table.appendChild(tr);
	}
	parent.appendChild(table);
}

// Функция заполнения
let move = 0
function filling(arr, cell) {
	if(move % 2 === 0) {
			cell.el.innerHTML = 'X';
			cell.value = 'Cross';
			cell.el.classList.add('krest');
	} else {
		cell.el.innerHTML = '0';
		cell.value = 'Zero';
		cell.el.classList.add('zero');
	}
	console.log(move, move % 2)
	move++
	checked(arr, cell);
}

// Функция проверки

function checked(arr, cell) {
	let classCell = document.getElementsByClassName('td');
	let moveArr = [
		// ГОРИЗОНТАЛИ
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
	    // ДИАГОНАЛИ
		[0, 4, 8],
		[2, 4, 6],
		// ВЕРТИКАЛИ
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
	]
	for(let i = 0; i < moveArr.length; i++) {
		console.log(classCell[moveArr[i][0]].innerHTML);
		if(classCell[moveArr[i][0]].innerHTML == 'X' && classCell[moveArr[i][1]].innerHTML == 'X' && classCell[moveArr[i][2]].innerHTML == 'X') {
			alert('Крестики победили!');
		} else if(classCell[moveArr[i][0]].innerHTML == '0' && classCell[moveArr[i][1]].innerHTML == '0' && classCell[moveArr[i][2]].innerHTML == '0') {
			alert('Нолики победили!');
		}
	}
}



let arr = createArr(3, 3);
createTable(document.body, arr);



