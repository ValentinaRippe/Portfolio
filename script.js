

//Menu scroll
let prev2Scrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
if (prev2Scrollpos > currentScrollPos) {
document.getElementById("fixed").style.top = "0";
}
 else {
document.getElementById("fixed").style.top = "-700px";
}
prev2Scrollpos = currentScrollPos;
}
//filter blur proyect
 document.getElementById("proyect1").onmouseover = function() {mouseOver()};
 document.getElementById("proyect1").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("blurLanding").style.filter = "blur(0px)";
}
function mouseOut() {
  document.getElementById("blurLanding").style.filter = "blur(5px)";
}
document.getElementById("proyect2").onmouseover = function() {mouseOver2()};
document.getElementById("proyect2").onmouseout = function() {mouseOut2()};

function mouseOver2() {
   document.getElementById("blur2").style.filter = "blur(0px)";
}
function mouseOut2() {
 document.getElementById("blur2").style.filter = "blur(5px)";
}
document.getElementById("proyect3").onmouseover = function() {mouseOver3()};
document.getElementById("proyect3").onmouseout = function() {mouseOut3()};

function mouseOver3() {
   document.getElementById("blur3").style.filter = "blur(0px)";
}
function mouseOut3() {
 document.getElementById("blur3").style.filter = "blur(5px)";
}
//Form submit
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#emailSubmit')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:lauravalentina200102@gmail.com?subject= nombre ${form.get('name')}  correo ${form.get('email')}&body= ${form.get('message')}`)
  $buttonMailto.click()
}
