

//Menu scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("menu").style.top = "0";
}
 else {
document.getElementById("menu").style.top = "-700px";
}
prevScrollpos = currentScrollPos;
}
//Animation proyect
let removeStyleButton = document.getElementById("removeStyleButton")
let blurLanding = document.getElementById("blurLanding")

removeStyleButton.addEventListener('click', function(){
    if(blurLanding.classList.contains('style')) {
        blurLanding.classList.add('style');
    } else{
        blurLanding.classList.remove('style');
    }
})

//Form submit
const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#emailSubmit')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  emailSubmit.setAttribute('href', `mailto:lauravalentina200102@gmail.com?subject=${form.get('name')}${form.get('email')}&body=${form.get('message')}`)
  emailSubmit.click()
  $buttonMailto.setAttribute('href', `mailto:lauravalentina200102@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}