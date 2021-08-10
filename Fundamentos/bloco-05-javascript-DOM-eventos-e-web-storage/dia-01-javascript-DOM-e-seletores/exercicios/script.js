let header = document.querySelector('#header-container')
let urgente = document.querySelector('.emergency-tasks');
let naoUrgente = document.querySelector('.no-emergency-tasks')
let topicos = document.getElementsByTagName('h3')
let footer = document.getElementById('footer-container')

console.log(topicos);
header.style = 'background-color: RGB(0, 176, 105)';
urgente.style = 'background-color: RGB(255, 159, 132)';
naoUrgente.style = 'background-color: RGB(249, 219, 94)';
topicos[0].style = 'background-color: RGB(165, 0, 243)';
topicos[1].style = 'background-color: RGB(165, 0, 243)';
topicos[2].style = 'background-color: RGB(35, 37, 37)';
topicos[3].style = 'background-color: RGB(35, 37, 37)';
footer.style = 'background-color: RGB(0, 53, 51)'