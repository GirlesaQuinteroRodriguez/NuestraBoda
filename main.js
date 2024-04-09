var bg;
var bg2;
var topc;
var calendar;
var content;
var controls;
var circle;
var bc;
var bc1;
var bc2
var button;
var button1;
var button2;
var button3;
var signIn1;
var signIn2;
var loader1;
var loader2;
var x;
var y;
var thankyou;
var tk;
var changeD;


async function materialClick1(event) {
  thankyou = document.querySelector('.thankyou');
  tk = document.querySelector('.tk')
  changeD = document.querySelector('ChangeD')
  bg = document.querySelector('.bg');
  bg2 = document.querySelector('.bg2');
  topc = document.querySelector('.top');
  calendar = document.querySelector('.calendar');
  content = document.querySelector('.content');
  controls = document.querySelector('.controls');
  circle1 = document.querySelector('.circle1');
  bc1 = document.querySelector('.button-container1');
  button1 = document.querySelector('.button1');
  signIn1 = document.querySelector('.sign-in1');
  loader1 = document.querySelector('.loader1');
  x = event.offsetX - circle1.offsetWidth / 2;
  y = event.offsetY - circle1.offsetHeight / 2;
  const registerAnswer = require('./asistencia').funciones.registerAnswer;
  const nombre = document.querySelector('input.input:nth-of-type(1)').value;
  const email = document.querySelector('input.input:nth-of-type(2)').value;
  await registerAnswer(true, email, nombre);
  
  circle1.classList.remove('animate1');
  circle1.style.left = x + 'px';
  circle1.style.top = y + 'px';
  bc1.style.zIndex = 1;
  setTimeout(function() {
    circle1.classList.add('animate1');
    button1.classList.add('animate1');
    signIn1.classList.add('animate1');
    loader1.classList.add('animate1');
    setTimeout(function() {
      loader.classList.add('animateOut');
    }, 1000);
    setTimeout(function() {
      controls.classList.add('hidden');
      bg.classList.add('no-image');
      bg2.classList.add('visible');
      thankyou.classList.add('visible');
      tk.classList.add('visible');
      changeD.classList.add('visible');
      topc.classList.add('visible');
      calendar.classList.add('visible');
    }, 1460);
    setTimeout(function() {
      content.classList.add('removed')
    }, 2000);
  }, 50);
}

async function materialClick2(event) {
  thankyou = document.querySelector('.thankyou');
  tk = document.querySelector('.tk')
  changeD = document.querySelector('ChangeD')
  bg = document.querySelector('.bg');
  bg2 = document.querySelector('.bg2');
  topc = document.querySelector('.top');
  calendar = document.querySelector('.calendar');
  content = document.querySelector('.content');
  controls = document.querySelector('.controls');
  circle2 = document.querySelector('.circle2');
  bc2 = document.querySelector('.button-container2');
  button2 = document.querySelector('.button2');
  signIn2 = document.querySelector('.sign-in2');
  loader2 = document.querySelector('.loader2');
  x = event.offsetX - circle2.offsetWidth / 2;
  y = event.offsetY - circle2.offsetHeight / 2;
  const registerAnswer = require('./asistencia').funciones.registerAnswer;
  const nombre = document.querySelector('input.input:nth-of-type(1)').value;
  const email = document.querySelector('input.input:nth-of-type(2)').value;
  await registerAnswer(false, email, nombre);
  
  circle2.classList.remove('animate2');
  circle2.style.left = x + 'px';
  circle2.style.top = y + 'px';
  bc2.style.zIndex = 1;
  setTimeout(function() {
    circle2.classList.add('animate2');
    button2.classList.add('animate2');
    signIn2.classList.add('animate2');
    loader2.classList.add('animate2');
    setTimeout(function() {
      loader.classList.add('animateOut2');
    }, 1000);
    setTimeout(function() {
      controls.classList.add('hidden');
      bg.classList.add('no-image');
      bg2.classList.add('visible');
      thankyou.classList.add('visible');
      tk.classList.add('visible');
      changeD.classList.add('visible');
      topc.classList.add('visible');   
      calendar.classList.add('visible');
    }, 1460);
    setTimeout(function() {
      content.classList.add('removed')
    }, 2000);
  }, 50);
}


function restart(event) {
  bc1.style.zIndex = 0;
  bc2.style.zIndex = 0;
  button1.classList.remove('animate1');
  button2.classList.remove('animate2');
  signIn1.classList.remove('animate1');
  loader1.classList.remove('animate1');
  loader1.classList.remove('animateOut1');
  signIn2.classList.remove('animate2');
  loader2.classList.remove('animate2');
  loader2.classList.remove('animateOut2');
  controls.classList.remove('hidden');
  bg.classList.remove('no-image');
  bg2.classList.remove('visible');
  topc.classList.remove('visible');
  calendar.classList.remove('visible');
  content.classList.remove('removed');
  document.querySelectorAll('.input').forEach(input => input.value = '');
}

function restart2(event) {
  // Reuse elements for clarity
  const button1 = document.getElementById('button1');
  const button2 = document.getElementById('button2');
  const signIn2 = document.querySelector('.sign-in2');
  const loader2 = document.querySelector('.loader2');
  const signIn1 = document.querySelector('.sign-in1');
  const loader1 = document.querySelector('.loader1');

  const clickedButton = event.target.closest('.animate1, .animate2'); // Get the clicked button with either class
  const animateClass = clickedButton ? (clickedButton.classList.contains('animate1') ? 'animate1' : 'animate2') : null;
  console.log(animateClass)

  // Get the corresponding elements to remove class from
  const elementsToRemoveClass = [button1, signIn1, loader1, loader2, button2, signIn2, loader2]
    .filter(element => element.classList)
    .filter(element => {
      const elementId = element.id;
      const lastChar = elementId.charAt(elementId.length - 1);
      return lastChar === animateClass[7];
    });

  // Remove relevant animation classes
  elementsToRemoveClass.forEach(element => {
    element.classList.remove(animateClass);
    element.classList.remove(`animateOut${animateClass[7]}`); // Remove corresponding "animateOut" class
  });

  // Reset other elements
  controls.classList.remove('hidden');
  topc.classList.remove('visible');
  calendar.classList.remove('visible');
  thankyou.classList.remove('visible');
  content.classList.remove('removed');

  // Clear input values (assuming safe selectors)
  document.querySelectorAll('.input').forEach(input => input.value = '');
}
 