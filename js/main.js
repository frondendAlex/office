document.addEventListener('DOMContentLoaded', () => {

  'use strict'

  // Burger menu
  const headerNavMenu = document.querySelector('.header__nav');
  const burgerMenu = document.querySelector('.burger');
  const overlow = document.querySelector('.overlow');
  const headerButton = document.querySelector('.header__button');

  // DropDown
  const formSelects = document.querySelectorAll('.form__select');

  // Выбор текста в форме по Selects
  const formSelectText = document.querySelectorAll('.form__select-item');
  const formTagsList = document.querySelector('.form__tags');

  // Показывает номер телефона
  const btn = document.querySelectorAll('.businesscenter__info-btn-tel');

  // Model Message
  const btnHeaderModal = document.querySelectorAll('.header__btn');
  const modalMessage = document.querySelector('.modal');

  // Burger menu
  function menuShow(e) {
    const target = e.target;
    headerNavMenu.classList.toggle('active');
    overlow.classList.toggle('active');
    target.classList.toggle('active');
    if (headerNavMenu.classList.contains('active')) {
      headerButton.style.position = 'relative';
      headerButton.style.zIndex = '20';
      document.body.style.overflowY = 'hidden';
    } else {
      headerButton.style.position = '';
      headerButton.style.zIndex = '';
      document.body.style.overflow = '';
    }
  };

  // Overlow
  function overlowClosest(e) {
    e.target.classList.remove('active');
    burgerMenu.classList.remove('active');
    headerNavMenu.classList.remove('active');
    document.querySelector('.burger__decor').classList.remove('active');
    document.body.style.overflow = '';
    modalMessage.classList.remove('active');
  };

  // DropDown
  formSelects.forEach(item => {

    const formSelectList = item.querySelector('.form__select-list');
    const formSelectTexts = item.querySelectorAll('.form__select-item');
    const formSelectBtn = item.querySelector('.form__select-text'); 
    const formSelectInputHidden = item.querySelector('.form__select-input-hidden');

    formSelectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      formSelectList.classList.toggle('active');
    })
    
    formSelectTexts.forEach(item => {
      item.addEventListener('click', (e) => {
        const targetText = e.target.textContent;
        formSelectBtn.textContent = targetText;
        formSelectInputHidden.value = e.target.dataset.value;
        formSelectList.classList.remove('active');
      })
   })
  
    document.addEventListener('click', (e) => {
      if (e.target !== formSelectBtn) {
        formSelectList.classList.remove('active');
      }
    })
  })

  // Выбор текста в форме по Selects
  formSelectText.forEach(item => {
    item.addEventListener('click', (e) => {
      let targetText = e.target.textContent;
      const typeData = e.target.dataset.type;
      const tag = formTagsList.querySelector(`.form__tags-${typeData}`);
      tag.innerHTML = targetText;
    })
  })

  // Показывает номер телефона
  btn.forEach(element => {
    const telText = element.querySelector('.businesscenter__info-btn-text');
    const telLink = element.querySelector('.businesscenter__info-link-tel');
    element.addEventListener('click', () => {
      telText.style.display = 'none';
      telLink.style.display = 'block';
    })
  });

  // Model Message
  btnHeaderModal.forEach(item => {
    item.addEventListener('click', () => {
      modalMessage.classList.add('active');
      overlow.classList.add('active');
      document.body.style.overflowY = 'hidden';
    })
  })

  modalMessage.addEventListener('click', (e) => {
    const target = e.target.closest('.modal__closest');
    if (target) {
      modalMessage.classList.remove('active');
      overlow.classList.remove('active')
    }
  });

  burgerMenu.addEventListener('click', menuShow);
  overlow.addEventListener('click', overlowClosest);
  

});


// Slider
// let swiper = new Swiper(".mySwiper", {
//   spaceBetween: 14,
//   slidesPerView: 3,
//   freeMode: true,
//   watchSlidesProgress: true,
// });

// let swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });