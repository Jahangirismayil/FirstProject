// Uyarı kutusunu göster
function showCustomAlert() {
  const overlay = document.getElementById('overlay');
  const alertBox = document.getElementById('alertBox');
  overlay.style.display = 'block';
  alertBox.style.display = 'block';
}

// Uyarı kutusunu gizle
function hideCustomAlert() {
  const overlay = document.getElementById('overlay');
  const alertBox = document.getElementById('alertBox');
  overlay.style.display = 'none';
  alertBox.style.display = 'none';
}

// Sayfa yüklendiğinde uyarıyı göster
window.onload = showCustomAlert;

// Kapat düğmesine tıklandığında uyarıyı gizle
document.getElementById('closeAlertBtn').addEventListener('click', hideCustomAlert);



const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    effect: 'fade',
          autoplay: {
         delay: 3500,
         disableOnInteraction: false,
       },
       pagination: {
        el: ".swiper-pagination",
      },
  
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  });




