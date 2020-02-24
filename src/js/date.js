let year = [];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function CreateArrayYear() {
	for (let i=1900;i<2020;i++){
		year.push(i);
	}
	return year;
}
CreateArrayYear();

let SelectYear = document.querySelector('.Year');
let SelectMonth = document.querySelector('.Month');
let SelectDay = document.querySelector('.Day');

day.forEach((item) => {
		SelectDay.options[SelectDay.options.length] = new Option(item, item)
	})

month.forEach((item) => {
	SelectMonth.options[SelectMonth.options.length] = new Option(item, item);
})

year.forEach((item) => {
	SelectYear.options[SelectYear.options.length] = new Option(item, item);
})

//теперь добавим методы проверки
SelectMonth.onchange = function() {
	if (SelectMonth.SelectIndex === 2) {
		SelectDay.options.SelectIndex === '2';
	}
}
	
