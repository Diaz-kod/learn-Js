
// Создание массивов обьектов
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

// Генерирование массива в таблицу и вынос на экран
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

// Проход спиралью по массиву
function spiralPassage(arr) {
	// Направления движения ячейки
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
	// Цикл делаем плоским, далее В условии цикла проверяем есть ли хотя бы один элемент не false
	while(arr.flat().some(elem => !elem.passed)) {
		// Обновляем значение текущей ячейки как проверенную
		arr[i][j].passed = true;
		// Внутренности ячейки заполняем каким то числом для отображения
		arr[i][j].el.innerHTML = counter;
		// Следующий индекс + текущее напрвление 
		let nextI = i + direct[currDirect].i;
		let nextJ = j + direct[currDirect].j;
		// Проверяем следующая ячейка Undefined или нет
		let nextCell = arr[nextI] && arr[nextI][nextJ];	
		// Следующая ячейка не граница? И пройдена ли она?
			arr[i][j].el.style.background = randomColor();
		if (nextCell !== undefined && nextCell.passed == false) {
			// Делаем следующую ячейку текущей
			i = nextI;
			j = nextJ;
			// Увеличиваем значение ячейки на 1 для отображения
			counter++
		} else {
			// Иначе меняем направление движения ячейки
			currDirect = getNextDirection(currDirect);	
		}
	}
}


// Функция смены направлений
function getNextDirection(currDirect) {
	switch(currDirect) {
		case 'right': return 'down';
		case 'down': return 'left';
		case 'left': return 'up';
		case 'up': return 'right';
	}
}

// Функция подбора рандомного цвета для ячейки
function randomColor() {
	let i = Math.floor(Math.random() * 255);
	let j = Math.floor(Math.random() * 255);
	let k = Math.floor(Math.random() * 255);
	let cell = `rgb(${i}, ${j}, ${k})`;
	return cell
}








console.log(randomColor())

const table = createArr(10, 10);

renderTable(document.body, table);

spiralPassage(table);