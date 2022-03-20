
//select all document
let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

form.addEventListener('submit', (e) => {
	e.preventDefault();

	checkInputs();
});

function checkInputs(){
	let usernameValue = username.value.trim();
	let emailValue = email.value.trim();
	let passwordValue = password.value.trim();
	let password2Value = password2.value.trim();

	if(usernameValue === ""){
		setErrorFor(username, "Username cannot be blank!");
	} else{
		setSuccessFor(username);
		// username.value = "";
	}

	if(emailValue === ""){
		setErrorFor(email, "Email cannot be blank!");
	} else{
		setSuccessFor(email);
	}

	if(passwordValue === ""){
		setErrorFor(password, "Password cannot be blank!");
	} else{
		setSuccessFor(password);
	}

	if(password2Value === ""){
		setErrorFor(password2, "Check password cannot be blank!");
	} else if(passwordValue !== password2Value){
		setErrorFor(password2, "Password dosn't match!");
	} else{
		setSuccessFor(password2);
	}	
}

function setErrorFor(input, message){
	let formControl = input.parentElement; // form-control

	let small = formControl.querySelector("small");

	// show error message
	small.innerText = message;

	// add error class
	formControl.className = "form-control error";
}

function setSuccessFor(input){
	let formControl = input.parentElement;
	formControl.className = "form-control success";
}

function isEmail(email){
	return /^[A-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[A-Z0-9.-]+$/.test(email);
}