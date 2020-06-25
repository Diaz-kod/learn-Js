
// Создание массивов обьектов
function createArr(width, height) {
	// Массив будущих обьектов
	const arr = []
	for(let i = 0; i < width; i++) {
		// Строка массива тоже массив
		arr[i] = []
		for(let j = 0; j < height; j++) {
			// Ячейка массива является обьектом
			arr[i][j] = {
				// Пустота
				empty: false,
				// Индекс i
				i: i,
				// Индекс j
				j: j,
				// Порядковый номер ячейки
				counted: width * i + j,			
			}
		}
	}
	// Выводим готовый массив
	return arr
}


// Функция назначения пустой ячейки
function setEmptyCell(cell) {
	cell.empty = true
}



// Генерирование массива в таблицу и вынос на экран
function renderTable(parent, arr) {
	const button = document.createElement('button');
	button.classList.add('but');
	button.innerHTML = 'Restart'
	const table = document.createElement('table');
	table.classList.add('table');
	button.addEventListener('click', () => {
		restart(arr);
	})
	for(let i = 0; i < arr.length; i++) {
		const tr = document.createElement('tr');
		table.appendChild(tr);
		for(let j = 0; j < arr.length; j++) {
			const td = document.createElement('td');
			// У всех непустых ячеек класс 'cell'
			td.classList.add('cell');
			// Внутри ячейки порядковый номер
			// Внутри объекта свойство el: содержит ключ с классом 
			arr[i][j].el = td;
			// По клику на ячейку вызывается стрелочная функция
			td.addEventListener('click', () => {
				replacement(arr, arr[i][j]);
			})
			tr.appendChild(td)
			// Обозначение пустой ячейки
			if(arr[i][j].empty) {
				td.classList.remove('cell');
				td.classList.add('null');
			}
		} 
	}
	parent.appendChild(table);
	parent.appendChild(button);
}


// Функция замены классов и внутренней части обьекта ячеек пустой с непустой
function reRenderCell(cell) {
	if(cell.empty) {
		cell.el.classList.remove('null');
		cell.el.classList.add('cell');
		cell.el.innerHTML = cell.counted;
		cell.empty = false;
		console.log(cell.i, cell.j)
	} else {
		cell.el.classList.remove('cell');
		cell.el.classList.add('null');
		cell.el.innerHTML = cell.counted;
		cell.empty = true;
	}
}




// Функция замены индексов 
function replacement(arr, cell) {
	console.log(cell)
	// Если пустая то выходим
	if(cell.empty) {
		return 
	}
	// emptyCell - пустая ячейка
	const emptyCell = arr.flat().find(cell => cell.empty);		
	// Переходим к функции по замене классов
	if(Math.abs(cell.i - emptyCell.i) <= 1 && Math.abs(cell.j - emptyCell.j) <= 1 && Math.abs(cell.i - emptyCell.i) + Math.abs(cell.j - emptyCell.j) <= 1) {	
		let countCell = cell.counted;
		cell.counted = emptyCell.counted;
		emptyCell.counted = countCell;		
		reRenderCell(cell);
		reRenderCell(emptyCell);
	}
}

function restart(arr) {
	const cellLabels = []
	for(let i = 1; i < arr.flat().length; i++) {
		cellLabels.push(i);
	} 
	cellLabels.sort(() => Math.round(Math.random() * 2 - 1));
	cellLabels.unshift(0);
	arr.flat().forEach((cell, i) => {
		cell.counted = cellLabels[i];
		cell.el.innerHTML = cell.counted;
		if(cell.counted == 0) {
			cell.el.classList.remove('cell');
			cell.el.classList.add('null');
			cell.empty = true
		} else {
			cell.el.classList.remove('null');
			cell.el.classList.add('cell');
			cell.empty = false
		}
	})
}





// Выводим пустую ячейку, создаем таблицу, создаем массив с заданной шириной и высотой 
// С помощью стрелочной функции засовываем выводы внутрь, чтобы он успевал генерить на экран и выполнять скрипт
document.addEventListener("DOMContentLoaded", () => {
	const arr = createArr(5, 5);
	setEmptyCell(arr[0][0]);
	renderTable(document.body, arr);
})




