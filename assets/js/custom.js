// assets/js/custom.js
document.addEventListener('DOMContentLoaded', function () {
  /* ============================
   * 1. Gestion du header "not top"
   * ============================ */
  const header = document.querySelector('#header');
  const seuil = 20; // en px

  function checkScrollHeaderNotTop() {
    if (!header) return;
    if (window.scrollY > seuil) {
      header.classList.add('header-not-top');
    } else {
      header.classList.remove('header-not-top');
    }
  }

  window.addEventListener('scroll', checkScrollHeaderNotTop);
  window.addEventListener('load', checkScrollHeaderNotTop);
  checkScrollHeaderNotTop();

  /* ============================
   * 2. Slider "extended"
   * ============================ */
  document.querySelectorAll('.slider-extended').forEach(function (slider) {
    const slides = slider.querySelectorAll('.slide');

    slides.forEach(function (slide) {
      slide.addEventListener('click', function () {
        const active = slider.querySelector('.slide.active');
        if (active) {
          active.classList.remove('active');
        }
        slide.classList.add('active');
      });
    });
  });

  /* ============================
   * 3. Changement de fond du header au scroll
   *    (ancien code jQuery réécrit en vanilla)
   * ============================ */
  const headerText = document.querySelector('.header-text');
  const mainHeader = document.querySelector('header');
  const navHeader = document.querySelector('header-container');

  function toggleBackgroundHeader() {
    if (!headerText || !mainHeader || !navHeader) return;

    const scroll = window.scrollY;
    const boxHeight = headerText.offsetHeight;
    const headerHeight = mainHeader.offsetHeight;

  if (scroll >= boxHeight - headerHeight) {
    mainHeader.classList.add('background-header');
    navHeader.classList.remove('header-container'); // <-- suppression
  } else {
    mainHeader.classList.remove('background-header');
    navHeader.classList.add('header-container'); // <-- remise
  }
}

  window.addEventListener('scroll', toggleBackgroundHeader);
  window.addEventListener('load', toggleBackgroundHeader);
  window.addEventListener('resize', toggleBackgroundHeader);
  toggleBackgroundHeader();
});