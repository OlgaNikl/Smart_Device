export function showMore() {
  const aboutText = document.querySelectorAll('.about__text');
  const aboutToogle = document.querySelectorAll('.about__button');

  aboutToogle.addEventListener('click', function () {
    if (aboutText.classList.contains('about__text--hidden')) {
      aboutText.classList.remove('about__text--hidden');
      aboutToogle.innerHTML = 'Свернуть';
    } else {
      aboutText.classList.add('about__text--hidden');
      aboutToogle.innerHTML = 'Подробне';
    }
  });
}
