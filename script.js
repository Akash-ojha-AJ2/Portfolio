// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
});




var typingEffect = new Typed(".typedText",{
    strings : ["Full Stack Developer","Software Developer"],
    loop : true,
    typeSpeed : 90, 
    backSpeed : 75,
    backDelay : 1000
 })
