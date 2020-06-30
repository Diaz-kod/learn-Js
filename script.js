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
function filling(arr, cell) {
	if(move % 2 === 0 && cell.el.innerHTML !== 'X' && cell.el.innerHTML !== '0') {
			cell.el.innerHTML = 'X';
			cell.value = 'cross';
			cell.el.classList.add('krest');
	} else if(cell.el.innerHTML !== 'X' && cell.el.innerHTML !== '0') {
		cell.el.innerHTML = '0';
		cell.value = 'zero';
		cell.el.classList.add('zero');
	}
	move++
	checked(arr, cell);
}

// Функция проверки

function checked(arr, cell) {
	let allCellPlayGround = Array.from(document.getElementsByClassName('td'));
	console.log(allCellPlayGround); 
	const moveArr = [
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
	const isDraw = allCellPlayGround.every(cell => {
		return cell.classList == 'td krest' || cell.classList == 'td zero'
	})
	if(isDraw) {
		alert('Ничья')
		location.reload();
		return 
	}
	for(let i = 0; i < moveArr.length; i++) {	
		console.log(allCellPlayGround[i].classList)
		if(allCellPlayGround[moveArr[i][0]].innerHTML == 'X' && allCellPlayGround[moveArr[i][1]].innerHTML == 'X' && allCellPlayGround[moveArr[i][2]].innerHTML == 'X') {
			alert('Крестики победили!');
			location.reload();
		} else if(allCellPlayGround[moveArr[i][0]].innerHTML == '0' && allCellPlayGround[moveArr[i][1]].innerHTML == '0' && allCellPlayGround[moveArr[i][2]].innerHTML == '0') {
			alert('Нолики победили!');
			location.reload();
		} 
	}
}



let move = 0
let arr = createArr(3, 3);
createTable(document.body, arr);



