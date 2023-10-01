function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector('.close')


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Fermeture formulaire
function closeModal() {
  modalbg.style.display = 'none'
}
closeBtn.addEventListener('click', closeModal)


const form = document.querySelector("form")

// Inputs

const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birth = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const newYork = document.getElementById("location1");
const sanFrancisco = document.getElementById("location2");
const seattle = document.getElementById("location3");
const chicago = document.getElementById("location4");
const boston = document.getElementById("location5");
const portland = document.getElementById("location6");
const send = document.getElementById("send-formula");
const submitBtn = document.getElementsByClassName("btn-submit")[0]
const conditions = document.getElementById("checkbox1");

const errorsTable = {
  firstName :   "Vous devez entrer votre prénom.",
  character : "Vous deves entrer 2 caractères ou plus.",
  name : "Vous devez entrer votre nom.",
  email : "Vous devez entrer votre e-mail.",
  emailValid : "Vous devez entrer un e-mail valide.",
  birthdate : "Vous devez entrer votre date de naissance.",
  CGU : "Vous devez accepter les conditions.",
  number : "Vous devez entrer un nombre.",
  location : "Vous devez selectionner une ville.",
}

// Fonction message d'erreur
function createErrorMessage(errorMessage, parentNode){
  let spanError = document.createElement("span")
  spanError.classList.add("error")
  spanError.textContent = errorMessage
  parentNode.appendChild(spanError)
  parentNode.querySelector("input").classList.add("input-error");
}

// Fonction enlever message erreur
function clearErrorMessages(parentNode){
  let spans = parentNode.getElementsByClassName("error")
  parentNode.querySelector("input").classList.remove("input-error");
  if (spans){
    for(let i=0; i< spans.length; i++){
      parentNode.removeChild(spans[i]);
    }
  }
  else{
    console.log ("validé")
  }
}

 // Inputs table 
 let inputsTable = [first,last,email,birth,quantity]
 let checkBoxesTable = [newYork, sanFrancisco, seattle, chicago, boston, portland, conditions]


// Eléments de validation 
 const validation = document.getElementsByClassName("bground2")[0]
 const closeConfirmation = document.getElementById("close-btn-confirmation")
 const spanConfirmation = document.getElementsByClassName("close-confirmation")


form.addEventListener("submit", (event)=>{
  event.preventDefault()
  let count = 0;

  // Clean les messages d'erreur
 for (let i=0; i < formData.length; i++){
  clearErrorMessages(formData[i])
 }

// Validation prénom

  if (first.value.length === 0) {
    createErrorMessage(errorsTable.firstName, formData[0])
  } else if (first.value.length < 2){
    createErrorMessage(errorsTable.character, formData[0])
  } else {
    clearErrorMessages(formData[0])
    count++;
  }
    
// Validation nom

  if(last.value.length === 0){
    createErrorMessage(errorsTable.name, formData[1])
  } else if(last.value.length < 2){
    createErrorMessage(errorsTable.character, formData[1])
    } else{
    clearErrorMessages(formData[1])
    count++;
  }

// Validation email

  const regexEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if(email.value.length === 0){
    createErrorMessage(errorsTable.email, formData[2])
  } else if(!email.value.match(regexEmail)){
    createErrorMessage(errorsTable.emailValid, formData[2])
  } else {
    clearErrorMessages(formData[2])
    count++;
  }

  // Validation date de naissance

  if(!birth.value){
    createErrorMessage(errorsTable.birthdate, formData[3])
  } else {
    clearErrorMessages(formData[3])
    count++;
  }

  // Validation nombre tournois
  
   if(!quantity.value){
    createErrorMessage(errorsTable.number, formData[4])
  } else {
    clearErrorMessages(formData[4])
    count++;
  }

  // Validation ville

  if(!newYork.checked && !sanFrancisco.checked && !seattle.checked && !chicago.checked && !boston.checked && !portland.checked) {
    createErrorMessage(errorsTable.location, formData[5])
  } else {
    clearErrorMessages(formData[5])
    count++;
  }

  // Validation CGU

  if(!conditions.checked) {
    createErrorMessage(errorsTable.CGU, formData[6])
  } else {
    clearErrorMessages(formData[6])
    count++;
  }

 // Conditions réunies = validation

 if(count===7){
  validation.style.display = "block";
  closeModal();

  for (let i=0; i< inputsTable.length; i++){
    inputsTable[i].value = "";
  }

  for (let i=0; i< checkBoxesTable.length; i++){
    checkBoxesTable[i].checked = false;
  }
  }

})

 // Fermeture du message de validation

 function closeValidation() {
  validation.style.display = 'none';
}
closeConfirmation.addEventListener('click', closeValidation);
spanConfirmation[0].addEventListener('click', closeValidation);

  