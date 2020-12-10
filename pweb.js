let button = document.querySelector('button[data-toggle="modal"]');
let modal =  document.querySelector('.modal');
let invalid = document.querySelector('.invalid');
let body = document.querySelector('body')
let login = document.querySelector('.container form button')

document.getElementById("data").addEventListener("click", function(event){
    event.preventDefault()
});

button.addEventListener('click', function() {
    let username = document.forms['identitas']['username'].value;
    let password = document.forms['identitas']['password'].value;

    if (username == 'pweb_C' && password == '123123') {
        modal.classList.add('show');
        invalid.classList.remove('show');
        body.style.backgroundImage = 'none'
        body.style.backgroundColor = '#228B22';
    } else {
        invalid.classList.add('show');
        body.style.backgroundImage = 'url("background.jpg")';
        login.style.backgroundColor = '#ACE1AF';
    }

});

modal.addEventListener('click', function() {
    this.classList.remove('show');
});
