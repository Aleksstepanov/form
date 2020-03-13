let year = [];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


//Заполняем массив с годами
function CreateArrayYear() {
	for (let i=1900;i<2021;i++){
		year.push(i);
	}
	return year;
}
CreateArrayYear();

//находим наши теги option в документе html
let SelectYear = document.querySelector('.Year');
let SelectMonth = document.querySelector('.Month');
let SelectDay = document.querySelector('.Day');

//формируем выпадающий список дни
day.forEach((item) => {
		SelectDay.options[SelectDay.options.length] = new Option(item, item)
	})
//формируем выпадающий список месяцы
month.forEach((item) => {
	SelectMonth.options[SelectMonth.options.length] = new Option(item, item);
})
//формируем выпадающий список годы
year.forEach((item) => {
	SelectYear.options[SelectYear.options.length] = new Option(item, item);
})


//проверка ввода дня
SelectDay.addEventListener('change',() => {
	const isBissextileYear = (SelectYear.value%4 === 0 && SelectYear.value != '1900');
	const LongMonth = 'April June September November';
	
		if (LongMonth.includes(SelectMonth.value,0) && SelectDay.value === '31'){
			SelectDay.value = '30';
		}
		if (!isBissextileYear && (SelectMonth.value === 'February') && (parseInt(SelectDay.value)) > 28){
			SelectDay.value = '28';
		}
		if (isBissextileYear && (SelectMonth.value === 'February') && (parseInt(SelectDay.value)) > 29){
			SelectDay.value = '29';
		}
});

//проверка ввода месяца
SelectMonth.addEventListener('change', ValidSelectMonth);
function ValidSelectMonth(){
	const isBissextileYear = (SelectYear.value%4 === 0 && SelectYear.value != '1900');
	const LongMonth = 'April June September November';
	
		if (LongMonth.includes(SelectMonth.value,0) && SelectDay.value === '31'){
			SelectDay.value = '30';
		}
		if (!isBissextileYear && (SelectMonth.value === 'February') && (parseInt(SelectDay.value)) > 28){
			SelectDay.value = '28';
		}
		if (isBissextileYear && (SelectMonth.value === 'February') && (parseInt(SelectDay.value)) > 29){
			SelectDay.value = '29';
		}
	
}

//проверка ввода года
SelectYear.addEventListener('change', ValidSelectYear);
function ValidSelectYear() {
	const isBissextileYear = (SelectYear.value%4 === 0 && SelectYear.value != '1900');
	const LongMonth = 'April June September November';
	if (!isBissextileYear && (SelectMonth.value === 'February') && (parseInt(SelectDay.value)) > 28){
		SelectDay.value = '28';
	}
	if (isBissextileYear && (SelectMonth.value === 'February') && (parseInt(SelectDay.value)) > 29){
		SelectDay.value = '29';
	}
}
	
