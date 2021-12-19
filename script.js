let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
if (prevScrollpos > currentScrollPos) {
document.getElementById("menu").style.top = "0";
}
 else {
document.getElementById("menu").style.top = "-1000px";
}
prevScrollpos = currentScrollPos;
}