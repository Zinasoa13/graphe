

const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".dropdown")

hamburger.addEventListener('click',() =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener('click', ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

window.onscroll = function() {Scrolling()};

function Scrolling() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}