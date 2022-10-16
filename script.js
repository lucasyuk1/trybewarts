const email = document.getElementById('email');
const senha = document.getElementById('senha');
const login = document.getElementById('login');
const bSubmit = document.getElementById('submit-btn');
const iAgree = document.getElementById('agreement');
const iBoxText = document.querySelector('#textarea');
const iText = document.getElementById('counter');
const iForm = document.getElementById('evaluation-form');
const subjectBox = document.getElementsByClassName('subject');
const iName = document.getElementById('input-name');
const iLastName = document.getElementById('input-lastname');
const userEmail = document.getElementById('input-email');
const iHouse = document.querySelector('#house');

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

function catchContents() {
  let arrayContent = '';
  Array.from(subjectBox).forEach((content) => {
    if (content.checked === true) {
      if (arrayContent === '') {
        arrayContent += content.value;
      } else {
        arrayContent = `${arrayContent}, ${content.value}`;
      }
    }
  });
  return arrayContent;
}

// Mostrando as informações preenchidas no formulário

function newForm() {
  const newSectionForm = document.createElement('section');
  const divImage = document.createElement('div');
  const div = document.createElement('div');

  iForm.appendChild(newSectionForm);
  newSectionForm.appendChild(divImage);
  newSectionForm.appendChild(div);
  newSectionForm.id = 'form-data';
  Object.keys(obj).forEach((key) => {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = `${key}: ${obj[key]}`;
    div.appendChild(newParagraph);
    if (key === 'Casa') {
      divImage.classList.add(`${obj[key]}`);
      newSectionForm.classList.add(`container${obj[key]}`);
      div.classList.add(`div${obj[key]}`);
    }
  });
}

function objForm(e) {
  e.preventDefault();
  obj = {
    Nome: `${iName.value} ${iLastName.value}`,
    Email: `${userEmail.value}`,
    Casa: `${iHouse.value}`,
    Família: `${document.querySelector('input[name=family]:checked').value}`,
    Matérias: `${catchContents()}`,
    Avaliação: `${document.querySelector('input[name=rate]:checked').value}`,
    Observações: `${iBoxText.value}`,
  };
  iForm.style.display = 'none';
  newForm();
}

bSubmit.addEventListener('click', objForm);
