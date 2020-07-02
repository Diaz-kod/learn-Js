let allCell = Array.from(document.getElementsByClassName('table-calendar_cell'));

function clickCell(arr) {
	for(let i = 0; i < arr.length; i++) {
		arr[i].addEventListener('click', () => {
			arr.forEach(cell => cell.classList.remove('table-calendar_cell--active'));
			arr[i].classList.add('table-calendar_cell--active');
		})
	}
} 

// function setActiveCell(cell) {
// 	if(emptyCell.classList.contains('table-calendar_string_emptyCell')) {
// 		emptyCell.classList.remove('table-calendar_string_emptyCell');
// 		emptyCell.classList.add('table-calendar_string_activeCell');
// 	} else {
// 		cell.classList.('table-calendar_string_activeCell');
// 		cell.classList.add('table-calendar_string_emptyCell');
// 	}
// }


function addZero(value) {
	if(value < 10) {
		return '0' + value
	} 
	return value
}

function showTime() {
	const now = new Date();
	const time = document.getElementById('nowTime');
	let hours = now.getHours();
	let minutes = now.getMinutes(); 
	let seconds = now.getSeconds();
	return time.innerHTML = addZero(hours) + ':' + addZero(minutes) + ':' + addZero(seconds);
}

setInterval(showTime, 1000)




showTime()
clickCell(allCell);
