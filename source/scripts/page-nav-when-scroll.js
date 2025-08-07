const sectionObserver = new IntersectionObserver((entries) => {
  // перебор записей
  entries.forEach((entry) => {
    // если элемент появился
    if (entry.isIntersecting) {
      //1. Удалить этот класс "активный" у прежнего элемента
      const navItems = document.querySelectorAll('.page__nav-item--active');
      navItems.forEach((item)=>{
        item.classList.remove('page__nav-item--active');
      });
      //2. Добавить этот класс "активный" новому элементу
      const id = entry.target.id;
      const navLink = document.querySelector(`.page__nav-link[href="#${id}"]`);
      if (navLink) {
        const navItem = navLink.parentElement;
        console.log(navItem);
        navItem.classList.add('page__nav-item--active');
      }
    }
  });
},
{
  threshold: 0.9
});
const elements = document.querySelectorAll('.guide__item');
elements.forEach((element)=>sectionObserver.observe(element));
