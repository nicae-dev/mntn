const observer = new IntersectionObserver((entries) => {
  // перебор записей
  entries.forEach((entry) => {
    // если элемент появился
    if (entry.isIntersecting) {
      // добавить ему CSS-класс
      entry.target.classList.add('section__subtitle--smooth-show');
    }
  });
});
const elements = document.querySelectorAll('.section__subtitle');
elements.forEach((element)=>observer.observe(element));
