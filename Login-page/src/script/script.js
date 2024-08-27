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

// animation verify for mobile
const phoneLink1 = document.getElementById('cellviewlink1');
const phoneLink2 = document.getElementById('cellviewlink2');
const signin = document.getElementById('sign-in');
const signup = document.getElementById('sign-up');

phoneLink1.addEventListener('click', () => {
    signin.style.zIndex = '5';
    signup.style.zIndex = '10';
})
phoneLink2.addEventListener('click', () => {
    signin.style.zIndex = '10';
    signup.style.zIndex = '5';
})

// view password ▼
const checkview2 = document.getElementById('checkview2');
const checkview = document.getElementById('checkview');
const pass = document.getElementById('password');
const eye = document.getElementById('magicEye');
const pass2 = document.getElementById('password2');
const eye2 = document.getElementById('magicEye2');

function updateView() {
    if (checkview2.checked) {
        pass2.type = 'text';
        eye2.className = 'fa fa-eye';
    } else {
        pass2.type = 'password';
        eye2.className = 'fa fa-eye-slash';
    }

    if (checkview.checked) {
        pass.type = 'text';
        eye.className = 'fa fa-eye';
    } else {
        pass.type = 'password';
        eye.className = 'fa fa-eye-slash';
    }
}

checkview2.addEventListener('change', updateView);
checkview.addEventListener('change', updateView);
updateView();