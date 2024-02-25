
let mobileTri = document.querySelector('.mobleClick')
let body = document.querySelector('body')
let nav = document.querySelector('nav')
let navul = document.querySelector('ul')

mobileTri.addEventListener("click", function(){
  nav.classList.toggle('menuWorking')
  navul.classList.toggle('menuWorking')
  body.classList.toggle('menuWorking')
});

const swiperHome = new Swiper(".homeSlider", {

  direction: "horizontal",
  loop: true,
  effect: "fade",
  // autoplay: {
  //   delay: 5000,
  // },


  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  
});

var menu = ['Business	', 'Process', 'Technology', 'Soft Skills']
const swiper = new Swiper(".swiperCard",  {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (menu[index]) + '</span>';
      },
  },// Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
      
    },
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

 


  //Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }

  
});

const swiper2 = new Swiper(".clinetTest",  {
  // Optional parameters
  slidesPerView: 3,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
      
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    300: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 320px
    640: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    720: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    960: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  },

  // // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },


  //Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }

  
});

let TextEmpty = document.querySelectorAll('.swiper-pagination-bullet')


TextEmpty.forEach((e)=>{
  // console.log(e);
  if(e.innerText == 'undefined') {
    let x = e.classList.add('extrabutton')
    // console.log(x);
  }
})



// menu 


