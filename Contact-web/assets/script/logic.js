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

/*==================== CHANGE MAP ====================*/
$(document).ready(function(){

  // const req = new XMLHttpRequest();
  // req.open('GET', 'assets/student_demo.json',true);
  // req.send();
  // req.onload=function(){
  //   if(this.status==200){
  //     console.log('status=200');
  //   }else if(this.status==404){
  //     console.log("error 404")
  //   }

  $(document).on('click', '.hover', function(){

    $('.navsec').find('.active').addClass('hover');
    $('.navsec').find('a').removeClass('active');
    
    if (($(this).attr('id'))==='head_office'){
      console.log('head off');
      $('#mapFrame').attr('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.413442166317!2d106.8267953!3d-6.2829998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63abdbd65a5fbc15!2sPiesta%20Consulting!5e0!3m2!1sen!2sid!4v1612881137000!5m2!1sen!2sid');
      $('#head_office').removeClass('hover').addClass('active');
    }
    else if(($(this).attr("id"))==="surabaya_office"){
      console.log("surabaya off")
    }
    else if(($(this).attr("id"))==="medan_office"){
      console.log("medan off")
    }
    else if(($(this).attr("id"))==="bandung_office"){
      console.log("bandung off")
      $('#mapFrame').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.753760470456!2d107.65200571487243!3d-6.920013469653812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x51101dcf6072f85%3A0x9d8bf279de243c58!2sPiesta%20Consulting%20Group!5e0!3m2!1sen!2sid!4v1624562912992!5m2!1sen!2sid');
      $('#bandung_office').removeClass('hover').addClass('active');
      $('#map_h1').html('Bandung Office');
    }
    else if(($(this).attr("id"))==="pekanbaru_office"){
      console.log("pekanbaru off")
    }
    else if(($(this).attr("id"))==="semarang_office"){
      console.log("semarang off")
    }
  
  });
// }
});