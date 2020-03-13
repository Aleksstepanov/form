import {Forms} from './classform';
import {HtmlVariables} from './HtmlVariables';

export function 	isValid(value) {
	return value.length > 0
}

//событие при потере фокуса с поля ввода email
HtmlVariables.Email.addEventListener('change', (event) => {
	const newUser = new Forms({
		email : HtmlVariables.Email.value
		});
	isValid(newUser.email.length)>0 ? HtmlVariables.Email.style.borderBottom = '2px solid #FF2828' :  HtmlVariables.Email.style.borderBottom = 'none'; 
	if (!newUser.isValidEmail()) {
		HtmlVariables.Email.style.color = '#FF2222';
		HtmlVariables.Email.style.borderBottom = '2px solid #FF2828';
		HtmlVariables.Email.classList = 'baseInput';
	}
	else {
		HtmlVariables.Email.classList += ' email';
		HtmlVariables.Email.style.color = '#111111';
		HtmlVariables.Email.style.borderBottom = 'none';
	}
})

//событие при потере фокуса с поля ввода password
HtmlVariables.Password.addEventListener('change', () => {
	const newUser = new Forms({
		password : HtmlVariables.Password.value,
		confirmPassword : HtmlVariables.ConfirmPassword.value
	})
	if (newUser.isValidPassword()) {
		HtmlVariables.Password.style.color = '#111111';
		HtmlVariables.Password.style.borderBottom = 'none';
	}
	else {
		HtmlVariables.Password.style.color = '#FF2222';
		HtmlVariables.Password.style.borderBottom = '2px solid #FF2828';
	}
	
	if(newUser.isValidPassword() && !newUser.isPassword()){
		HtmlVariables.ConfirmPassword.style.color = '#FF2222';
		HtmlVariables.ConfirmPassword.style.borderBottom = '2px solid #FF2828';
	}
})

//событие при потере фокуса с поля ввода confirmPassword
HtmlVariables.ConfirmPassword.addEventListener('change', () => {
	const newUser = new Forms({
		password : HtmlVariables.Password.value,
		confirmPassword : HtmlVariables.ConfirmPassword.value
	})
	if (newUser.isValidPassword() && newUser.isPassword()){
		HtmlVariables.ConfirmPassword.style.color = '#111111';
		HtmlVariables.ConfirmPassword.style.borderBottom = 'none';
		HtmlVariables.SubmitBtn.disabled = false;
	}
	
})

//событие при смене фокуса с поля ввода firstname
HtmlVariables.FirstName.addEventListener('change', () => {
	const newUser = new Forms({
		firstName : HtmlVariables.FirstName.value
	})
	isValid(newUser.firstName.length)>0 ? HtmlVariables.FirstName.style.borderBottom = '2px solid #FF2828' :  HtmlVariables.FirstName.style.borderBottom = 'none';
})

//событие при смене фокуса с поля ввода lastname
HtmlVariables.LastName.addEventListener('change', () => {
	const newUser = new Forms({
		lastName : HtmlVariables.LastName.value
	})
	isValid(newUser.lastName.length)>0 ? HtmlVariables.LastName.style.borderBottom = '2px solid #FF2828' :  HtmlVariables.LastName.style.borderBottom = 'none';
})