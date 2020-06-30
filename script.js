let allCell = Array.from(document.getElementsByClassName('cell'));

function clickCell(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i].addEventListener('click', () => {
			reversed(arr[i]);
		})
	}
} 

function reversed(cell) {
	if(cell.classlist == 'cell') {
		cell.classlist = 'cell-3';
	} else if(cell.classlist == 'cell-3') {
		cell.classlist = 'cell';
	}
}


clickCell(allCell);
// cell.addEventListener('click', () => {
// 	reversed();
// })