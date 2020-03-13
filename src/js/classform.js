export class Forms {

	constructor(options) {
		this.lastName = options.lastName,
		this.firstName = options.firstName,
		this.country = options.country,
		this.email = options.email,
		this.dateOfBrith = options.dateOfBrith,
		this.gender = options.gender,
		this.password = options.password,
		this.confirmPassword = options.confirmPassword
	}

	isPassword(){
		return this.password == this.confirmPassword
	}

	isValidPassword(){
		let pass = this.password; //получим значение пароля в переменную
		let valid;
		let sLetters = "qwertyuiopasdfghjklzxcvbnm"; //символы нижнего регистра
		let bLetters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // символы верхнего регистра
		let digits = '0123456789'; //цифры
		let specials = '!@#$%^&*()_-+=\|/.,:;[]{}'; //спецсимволы
		
		let pov = (letters) => {
			for (let i=0; i<pass.length; i++){
				if (letters.includes(pass[i])) {
					valid = true;
					break;
				}
				else valid = false;
			}
			return valid;
		}

		if (pass.length >= 8) { //проверям пароль на длинну символов
			valid = true;
		}
		else valid = false;
		
		if (valid) pov(sLetters);
		if (valid) pov(bLetters);
		if (valid) pov(digits);
		if (valid) pov(specials);
		return valid;
	}

	isValidEmail(){
		let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		return reg.test(this.email);
	}
}