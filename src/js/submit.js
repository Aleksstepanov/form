
import {Forms} from './classform';
import {HtmlVariables} from './HtmlVariables';
import {isValid} from './utils';
const requestURL = 'http://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body=null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = () => {
    			if (xhr.status >= 400) {
        		reject(xhr.response);
    			}
    			else {
       		 resolve(xhr.response);
    			}
    		xhr.onerror = () => {
        	reject(xhr.response);
    		}
    		}		
    		xhr.send(JSON.stringify(body));
    })
    
}

HtmlVariables.form.addEventListener('submit', submitClick);
function submitClick(event) {
	event.preventDefault();
	let GenderValue = () => {
		const result = HtmlVariables.Male.checked ? HtmlVariables.Male.value : HtmlVariables.Female.value;
		return result;  
	}
	const newUser = new Forms({
		lastName : HtmlVariables.LastName.value,
		firstName : HtmlVariables.FirstName.value,
		country : HtmlVariables.Country.value,
		email : HtmlVariables.Email.value, 		
		dateOfBrith : new Date(parseInt(HtmlVariables.YearBirth.value), HtmlVariables.MonthBirth.selectedIndex, parseInt(HtmlVariables.DayBirth.value)),
		gender : GenderValue(),
		password : HtmlVariables.Password.value,
		confirmPassword : HtmlVariables.ConfirmPassword.value
});
	
	//проверка совпадений паролей
	if (!newUser.isPassword() && newUser.isValidPassword()) {
		alert("Passwords don't match");
		HtmlVariables.SubmitBtn.disabled = true;
	}
	

	if (!newUser.isValidPassword()){
		alert("Incorrect password. The password must consist of at least 8 characters, contain uppercase and lowercase letters of the English alphabet, numbers, and special characters.");
		HtmlVariables.SubmitBtn.disabled = true;
	}
	else {
		HtmlVariables.SubmitBtn.disabled = false;
	}

	(!newUser.isValid(HtmlVariables.FirstName.value)) ? HtmlVariables.FirstName.style.borderBottom = '2px solid #FF2828' :  HtmlVariables.FirstName.style.borderBottom = 'none';
	(!newUser.isValid(HtmlVariables.LastName.value)) ? HtmlVariables.LastName.style.borderBottom = '2px solid #FF2828' :  HtmlVariables.FirstName.style.borderBottom = 'none';	

	if (newUser.isPassword() && newUser.isValidPassword() && newUser.isValidEmail() && newUser.isValid(HtmlVariables.FirstName.value)){
			//HtmlVariables.SubmitBtn.disabled = true;
			sendRequest('POST',requestURL,newUser);
			console.log(newUser);
			HtmlVariables.UserInfoForm.style.display = 'none';
			HtmlVariables.TitleText.innerHTML = 'Thank You!';
			HtmlVariables.TitleDescribe.innerHTML = 'you registered!';
			HtmlVariables.Footer.style.display = 'block';
		}
		
	}



