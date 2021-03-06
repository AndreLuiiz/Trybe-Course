const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

/*
 Copie esse arquivo e edite apenas ele;
 Crie uma função que adicione a classe 'tech' ao elemento selecionado;
1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
 Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech';
 Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
1. Que tal redirecionar para seu portifólio?
 Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;

Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

function classTech(event) {
    let tech = document.querySelector('.tech');
    tech.classList.remove('tech');
    event.target.className = 'tech';
    input.value = '';
}

function text() {
    document.querySelector('.tech').innerText = input.value;
}

function dblClick() {
    window.location.replace('https://andreluiiz.github.io/')
}

function changeColor(event) {
    event.target.style = 'color: blue';
}function changeColor2(event) {
    event.target.style = 'color: unset';
}

firstLi.addEventListener('click', classTech);
secondLi.addEventListener('click', classTech);  
thirdLi.addEventListener('click', classTech);

myWebpage.addEventListener('dblclick', dblClick);

myWebpage.addEventListener('mouseover', changeColor);
myWebpage.addEventListener('mouseout', changeColor2);


input.addEventListener('keyup', text);

firstLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);


// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.