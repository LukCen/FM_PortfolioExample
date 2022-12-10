'use strict'

const btn = document.querySelector("#btnSend");
// form elements
let formName = document.querySelector("#formName");
let formEmail = document.querySelector("#formEmail");
let formMsg = document.querySelector("#formMsg");


let contactText = document.querySelector("#contactText");
let contactForm = document.querySelector("#contactForm");

// result window visible after button press
const contactResult = document.querySelector("#colResult")


btn.addEventListener('click', () => {
    let newPara = document.createElement('p');
    const nameError = 'Please input a valid name.';
    const emailError = 'Please input a valid email adress.';

    const success = 'Everything went well!'

    let nameValid = false;
    let emailValid = false;
    
    contactText.style.display = 'none';
    contactForm.style.display = 'none';
    colResult.style.display = 'block';

    if(formName.value.length === 0){
        nameValid = false;
        
    } else {
        nameValid = true;
    }

    if(formEmail.value.length === 0){
        emailValid = false;
        
    } else {
        emailValid = true;
    }

    if(nameValid === true && emailValid === true){
        
        newPara.innerHTML = success
        colResult.appendChild(newPara);

    } else if (nameValid === false){
        newPara.textContent = nameError
        colResult.appendChild(newPara)
    } else if (emailValid === false){
        newPara.textContent = emailError
        colResult.appendChild(newPara)
    }


});