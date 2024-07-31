// animation verify ▼
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});


// view password ▼
const checkview2 = document.getElementById('checkview2');
const checkview = document.getElementById('checkview');

checkview2.addEventListener('change', () => {
    const pass2 = document.getElementById('password2');
    const eye2 = document.getElementById('magicEye2');

    if (pass2.type === 'password') {
        pass2.type = 'text';
        eye2.className = 'fa fa-eye';
    } else {
        pass2.type = 'password';
        eye2.className = 'fa fa-eye-slash';
    }
})
checkview.addEventListener('change', () => {
    const pass = document.getElementById('password');
    const eye = document.getElementById('magicEye');

    if (pass.type === 'password') {
        pass.type = 'text';
        eye.className = 'fa fa-eye';
    } else {
        pass.type = 'password';
        eye.className = 'fa fa-eye-slash';
    }
})