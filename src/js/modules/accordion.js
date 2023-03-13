export default function () {
  const titlesList = document.querySelectorAll('.accordion__item-title');

  for (let i = 0; i < titlesList.length; i++) {
    titlesList[i].addEventListener('click', function () {
      titlesList[i].closest('.accordion__item').classList.toggle('accordion__item--active');
      titlesList[i].classList.toggle('accordion__item-title--active');
    });
  }
}
