async function entrar(event) {
    event.preventDefault();

    const user = document.getElementById('user');
    const pass = document.getElementById('password2');
  
    if (pass.value === '' || user.value === '') {
      alert('Preencha todos os campos');
      return;
    }
  
    try {
      const users = JSON.parse(localStorage.getItem('users')) || [];
  
      const userFound = users.find(u => (u.usuario === user.value || u.email === user.value) && u.senha === pass.value);
  
      if (userFound) {
        alert('Login bem-sucedido!');
      } else {
        alert('Usuário ou senha incorretos');
      }
    } catch (error) {
      console.error('Ocorreu um erro ao tentar fazer login');
      console.error('Erro:', error);
    }
  }
  

async function register(event) {
    event.preventDefault();
  
    const name = document.getElementById('name');
    const mail = document.getElementById('email');
    const pass = document.getElementById('password');
    const user = name.value.replace(/\s/g, '');
  
    if (name.value === '' || mail.value === '' || pass.value === '') {
      alert('Preencha todos os campos');
      return;
    }
  
    try {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      
      const newUser = {
        nome: name.value,
        email: mail.value,
        usuario: user,
        senha: pass.value
      };
  
      users.push(newUser);
  
      localStorage.setItem('users', JSON.stringify(users));
  
      alert('Usuário cadastrado com sucesso!');
  
    } catch (error) {
      console.error('Ocorreu um erro ao tentar adicionar o usuário');
      console.error('Erro:', error);
    }
  }
  