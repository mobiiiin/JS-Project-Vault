const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 3,  
    slideshow:1,
    loop: Infinity,
    
  
    // pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  
    // Navigation arrows
    navigation: {
      prevEl: '.swiper-button-next',
      nextEl: '.swiper-button-prev',
    },
    

  });