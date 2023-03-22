// export function smoothScroll(event) {
//   event.preventDefault();
//   const questionBlock = document.querySelector('.question-block');

//   document.querySelector('.main__link').addEventListener('click', () => {
//   questionBlock.scrollIntoView({behavior: 'smooth'}),
//   });
// };

export function smoothScroll() {
  let anchors = document.querySelectorAll('a[href*="#"]');
  if (!anchors.length) {
    return;
  }
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      let anchorID = anchor.getAttribute('href');
      document.querySelector(anchorID).scrollIntoView({
        behavior: 'smooth', block: 'start',
      });
    });
  });
}

