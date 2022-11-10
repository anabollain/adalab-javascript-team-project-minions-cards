'use strict';


//Create object to store form inputs

const data = {
	palette: '1',
	name: '',
	job: '',
	phone: '',
	email: '',
	linkedin: '',
	github: '',
	photo: '',
};


//Create a generic function to check input values and fill 'data' object accordingly

function checkTarget (nameElement, valueTarget){
		//Get input values according to target
		if(nameElement === "name"){
			data.name = valueTarget;
		}else if(nameElement === "job"){
			data.job = valueTarget;
		}else if(nameElement === "phone"){
			data.phone = valueTarget;
		}else if(nameElement === "email"){
			data.email = valueTarget;
		}else if(nameElement === "linkedin"){
			data.linkedin = valueTarget;
		}else if(nameElement === "github"){
			data.github = valueTarget;
		}
}


//Create a function to update article with 'data' object values

function updatePreview (){
	//Name
	if(data.name === ''){
		previewArticleTitle.innerHTML = "Nombre Apellido";
	}else{
		previewArticleTitle.innerHTML = data.name;
	}
	//Job
	if(data.job === ''){
		previewArticleSubtitle.innerHTML = "Front-end developer";
	}else{
		previewArticleSubtitle.innerHTML = data.job;
	}
	//Phone
	if(data.phone === ''){
		previewArticlePhone.href = `tel:${"#"}`;
	}else{
		previewArticlePhone.href = `tel:${data.phone}`; 
	}
	//Email
	if(data.email === ''){
		previewArticleMail.href = `mailto:${"#"}`;
	}else{
		previewArticleMail.href = `mailto:${data.email}`;
	}
	//Linkedin
	if(data.linkedin === ''){
		previewArticleLinkedin.href = "#";
	}else{
		previewArticleLinkedin.href  = data.linkedin;
	}
	//Github
	if(data.github === ''){
		previewArticleGitHub.href = "#";
	}else{
		previewArticleGitHub.href  = data.github;
	}
}


//Main function associated to event listener in form

function handleInput (event){
	//Create variables for inputs with name attribute (matching object properties) & obtain their value
	const elementName = event.target.name;
	const value = event.target.value;
	checkTarget(elementName, value);
	updatePreview ();
	//Save in local storage
	//saveInLocalStorage();
}


//Event listener in form 

formElement.addEventListener('input', handleInput);