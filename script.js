const email = document.getElementById('email');
const senha = document.getElementById('senha');
const login = document.getElementById('login');
const bSubmit = document.getElementById('submit-btn');
const iAgree = document.getElementById('agreement');
const iBoxText = document.querySelector('#textarea');
const iText = document.getElementById('counter');

iBoxText.addEventListener('keyup', function countCaract() {
  const qtdcaracteres = this.value.length;
  const restantes = 500 - qtdcaracteres;
  iText.innerHTML = restantes;
});

login.addEventListener('click', () => {
  const iEmail = email.value;
  const iSenha = senha.value;
  if (iEmail === 'tryber@teste.com' && iSenha === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function bSubmitActive() {
  if (iAgree.checked) {
    bSubmit.removeAttribute('disabled');
  } else {
    bSubmit.setAttribute('disabled', true);
  }
}

iAgree.addEventListener('click', () => {
  bSubmitActive();
});
