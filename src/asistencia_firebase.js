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
var loader1; 
var loader2;

document.addEventListener('DOMContentLoaded', () => { 
  const button1 = document.querySelector('.button1');
  const button2 = document.querySelector('.button2');

  button1.addEventListener('click', materialClick1);
  button2.addEventListener('click', materialClick2);
});

async function materialClick1(event) {
  try {

    // Obtén los datos del formulario
    const nombreCompleto = document.querySelector('.inputs input:first-child').value;
    const correoElectronico = document.querySelector('.inputs input[type="email"]').value;

    // Valida los datos (puedes agregar más validaciones)
    if (!nombreCompleto || !correoElectronico) {
      alert('Por favor, completa todos los campos.');
      return; // Detener la ejecución si los datos no son válidos
    }
    console.log("Antes de guardar en Firestore");
    
    // Lógica asíncrona (guardar en Firestore) - MOVIDA AL PRINCIPIO
    await firebase.firestore().collection('invitados').add({
      nombre: nombreCompleto,
      correo: correoElectronico,
      RSVP: 'SI',
      mesa: '' // Puedes dejarlo vacío por ahora
    });
    console.log("Después de guardar en Firestore");

    // Feedback visual (opcional)
    event.target.classList.add('loading'); // Agrega una clase para indicar que se está cargando
    
 
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
        loader1.classList.add('animateOut');
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


  } catch (error) {
    console.error('Error al guardar la asistencia:', error);
    alert('Hubo un error al procesar tu asistencia. Por favor, inténtalo de nuevo.');
  } finally {
    event.target.classList.remove('loading'); // Quita la clase de carga
  }

}
  
async function materialClick2(event) {

  try {
    // Obtén los datos del formulario
    const nombreCompleto = document.querySelector('.inputs input:first-child').value;
    const correoElectronico = document.querySelector('.inputs input[type="email"]').value;

    // Valida los datos (puedes agregar más validaciones)
    if (!nombreCompleto || !correoElectronico) {
      alert('Por favor, completa todos los campos.');
      return; // Detener la ejecución si los datos no son válidos
    }

    // Lógica asíncrona (guardar en Firestore) - MOVIDA AL PRINCIPIO
    await firebase.firestore().collection('invitados').add({
      nombre: nombreCompleto,
      correo: correoElectronico,
      RSVP: 'NO',
      mesa: '' // Puedes dejarlo vacío por ahora
    });

    // Feedback visual (opcional)
    event.target.classList.add('loading'); // Agrega una clase para indicar que se está cargando
    
    // Resto de la lógica de animaciones y transiciones
    
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
      loader2.classList.add('animateOut2');
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
    // ... (el resto del código se mantiene igual)

  } catch (error) {
    console.error('Error al guardar la asistencia:', error);
    alert('Hubo un error al procesar tu asistencia. Por favor, inténtalo de nuevo.');
  } finally {
    event.target.classList.remove('loading'); // Quita la clase de carga
  }

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


 

 