var img = new Image()
img.src = 'trees.jpg';

var bg;
var bg2;
var topc;
var calendar;
var content;
var controls;
var circle;
var bc;
var button;
var signIn;
var loader;
var x;
var y;
var thankyou;
var tk;
var changeD;

function materialClick1(event) {
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

function materialClick2(event) {
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
  topc.classList.remove('visible');
  calendar.classList.remove('visible');
  thankyou.classList.remove('visible');
  content.classList.remove('removed');
  document.querySelectorAll('.input').forEach(input => input.value = '');
}
