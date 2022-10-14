window.onload = function () {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const login = document.getElementById('login');
  login.addEventListener('click', () => {
    const iEmail = email.value;
    const iSenha = senha.value;
    if (iEmail === 'tryber@teste.com' && iSenha === '123456') {
      alert('Olá, Tryber!');
    } else {
      alert('Email ou senha inválidos.');
    }
  });
};
