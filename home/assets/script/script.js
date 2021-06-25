/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu');
        });
    }
}
showMenu('nav-toggle','nav-menu');

const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== SCROLL TOP ====================*/
window.addEventListener('scroll', scrollTop);
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    //viewport=160
    if(this.scrollY >= 160){
        scrollTop.classList.add('show-scroll');
    } else{
        scrollTop.classList.remove('show-scroll');
    } 
}
ScrollReveal().reveal('.home__data');
// ScrollReveal().reveal('.r3__content');