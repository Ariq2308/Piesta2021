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
  // req.open('GET', 'assets/',true);
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
    
    //JAKARTA ======================
    if (($(this).attr('id'))==='head_office'){
      console.log('head off');
      location.reload();
    } //SURABAYA ======================
    else if(($(this).attr("id"))==="surabaya_office"){
      console.log("surabaya off")
      //map
      $('#mapFrame').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.556751067164!2d112.74405531477507!3d-7.2911643947375255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbb94310e7cb%3A0x22f17d2c9fe4d61b!2sRuko%20Sentra%20Kencana%2C%20Ngagel%2C%20Kec.%20Wonokromo%2C%20Kota%20SBY%2C%20Jawa%20Timur%2060246!5e0!3m2!1sen!2sid!4v1624869657456!5m2!1sen!2sid');
      $('#surabaya_office').removeClass('hover').addClass('active');
      //desc box
      $('#map_h1, #mail_h1').html('Surabaya Branch Office');
      $('.address').html('Komplek Ruko Sentra Kencana<br>Jl. Bung Tomo No.8 AG Kav.37<br>Surabaya');
      $('.telpnum1').html('(62-31) 5049769 , 5025419');
      $('.__telp2').css('display', 'none');
      $('.telpnum3').html('(62-31) 5049860');
      $('.emailadd').html('surabaya@piesta.co.id');

    } //MEDAN ======================
    else if(($(this).attr("id"))==="medan_office"){
      console.log("medan off")
      //map
      $('#mapFrame').attr('src', 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1991.0290528885382!2d98.6418356!3d3.5741136!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fcbe1ce9d05%3A0x7b82800e6df68ef9!2sPiesta%20Consulting!5e0!3m2!1sen!2sid!4v1624869775608!5m2!1sen!2sid');
      $('#medan_office').removeClass('hover').addClass('active');
      //desc box
      $('#map_h1, #mail_h1').html('Medan Branch Office');
      $('.address').html('Komp. Setiabudi Business Point, Blok CC No. 15<br>Jl. Setiabudi, Tanjung Rejo, Medan Sunggal,<br>Medan 20122');
      $('.telpnum1').html('(62-61) 8213600, 8213700');
      $('.__telp2').css('display', 'none');
      $('.telpnum3').html('(62-61) 8212800');
      $('.emailadd').html('medan@piesta.co.id');

    } //BANDUNG ======================
    else if(($(this).attr("id"))==="bandung_office"){
      console.log("bandung off")
      //map
      $('#mapFrame').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.836215423552!2d107.65187591487228!3d-6.910178669549951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7ec334925cf%3A0xaa08d87e09f0cc99!2sJl.%20Kalijati%20Raya%20No.45%2C%20Antapani%20Kulon%2C%20Kec.%20Antapani%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040291!5e0!3m2!1sen!2sid!4v1624869979007!5m2!1sen!2sid');
      $('#bandung_office').removeClass('hover').addClass('active');
      //desc box
      $('#map_h1, #mail_h1').html('Bandung Branch Office');
      $('.address').html('Jl. Kalijati Raya No. 45, RT 01/RW 03<br>Kel. Antapani Kulon, Kec. Antapani<br>Kota Bandung 40291');
      $('.telpnum1').html('(62-22) 7203266');
      $('.__telp2').css('display', 'none');
      $('.telpnum3').html('(62-22) 7203287');
      $('.emailadd').html('kjpp.tohr@piestabandung.com');

    } //PEKANBARU ======================
    else if(($(this).attr("id"))==="pekanbaru_office"){
      console.log("pekanbaru off")
      //map
      $('#mapFrame').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.664494530198!2d101.43673711482703!3d0.5031263638505601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5aeb3dab7645b%3A0x7116c9b64620461f!2sJl.%20Paus%20No.33a%2C%20Wonorejo%2C%20Kec.%20Marpoyan%20Damai%2C%20Kota%20Pekanbaru%2C%20Riau%2028124!5e0!3m2!1sen!2sid!4v1624870175964!5m2!1sen!2sid');
      $('#pekanbaru_office').removeClass('hover').addClass('active');
      //desc box
      $('#map_h1, #mail_h1').html('Pekanbaru Branch Office');
      $('.address').html('JL. Paus No.33 C RT 003/RW 006<br>Wonorejo,Maipoyan Damai,<br>Pekanbaru');
      $('.telpnum1').html('(62-761) 44126');
      $('.__telp2').css('display', 'none');
      $('.telpnum3').html('(62-761) 8520703');
      $('.emailadd').html('pku@piesta.co.id');

    } //SEMARANG ======================
    else if(($(this).attr("id"))==="semarang_office"){
      console.log("semarang off")
      //map
      $('#mapFrame').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.8707623779746!2d110.46631081477344!3d-7.024473894926071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708c4dfa315555%3A0xff27b26b3dd9bf43!2sJl.%20Fatmawati%20No.258b%2C%20Kedungmundu%2C%20Kec.%20Tembalang%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050273!5e0!3m2!1sen!2sid!4v1624869919421!5m2!1sen!2sid');
      $('#semarang_office').removeClass('hover').addClass('active');
      //desc box
      $('#map_h1, #mail_h1').html('Semarang Branch Office');
      $('.address').html('JL. Fatmawati No 258 B.<br>Semarang');
      $('.telpnum1').html('(62-24) 9108 1557');
      $('.__telp2, .__fax').css('display', 'none');
      $('.emailadd').html('general@piestaconsulting.com<br>consultancy@piestaconsulting.com<br>valuation@piestaconsulting.com');
    }
  });
// }
});