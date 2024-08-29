function entrar(event) {
    event.preventDefault();

    const user = document.getElementById('user');
    const pass = document.getElementById('password2');

    if (pass.value === '' || user.value === '') {
        alert ('Preencha todos os campos');
    }
}

function register(event) {
    event.preventDefault();

    const name = document.getElementById('name');
    const mail = document.getElementById('email');
    const pass = document.getElementById('password');

    if (name.value === ''|| mail.value === ''|| pass.value === '') {
        alert ('Preencha todos os campos');
    }
}