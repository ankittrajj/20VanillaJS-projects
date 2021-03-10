const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// show error function
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className= 'form-control ';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success function 
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className='form-control success';
}

// event listener  
form.addEventListener('click',function(event){
    event.preventDefault();

    if(username===" "){
        showError(Username,"UserName required");

    }
    else{
        showSuccess(username);
    }
    if(email===''){
        showError(email,"email required");

    }
    else{
        showSuccess(email);
    }


    if(password===''){
        showError(password,"email required");

    }
    else{
        showSuccess(password);
    }
    
});