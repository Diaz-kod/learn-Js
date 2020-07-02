let allCell = Array.from(document.getElementsByClassName('table-calendar_string_emptyCell'));

function clickCell(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i].addEventListener('click', () => {
			reversed(arr[i]);
		})
	}
} 

function reversed(cell) {
	// console.log(cell.classList)
	if(cell.classList.contains('table-calendar_string_emptyCell')) {
		cell.classList.add('table-calendar_string_activeCell');
	} else if(cell.classList.contains('table-calendar_string_activeCell')) {
		cell.classList.add('table-calendar_string_emptyCell');
		cell.classList.remove('table-calendar_string_activeCell')
		console.log(cell)
	}
}


clickCell(allCell);
