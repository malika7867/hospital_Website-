const navitems = document.querySelector('#navbar');
const open_navbtn = document.querySelector('#open_navbar-btn');
const close_navbtn = document.querySelector('#close_navbar-btn');

open_navbtn.addEventListener('click',() =>{
    navitems.style.display ='flex';
    open_navbtn.style.display = 'none';
    close_navbtn.style.display = 'inline-block';
})

const close_nav = () => {
    navitems.style.display ='none';
    open_navbtn.style.display = 'inline-block';
    close_navbtn.style.display = 'none';
}
close_navbtn.addEventListener('click',close_nav);

if(window.innerWidth < 1024){
  document.querySelectorAll('#navbar li a').forEach(navitems =>{
    navitems.addEventListener('click',() =>{
      close_nav();
    })
  })
}

window.addEventListener('scroll' , () =>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        600 :{
            slidesPerView:2
    },
    1024:{
        slidesPerView:3
    }
}
  });

