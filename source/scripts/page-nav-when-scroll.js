const sectionObserver = new IntersectionObserver((entries) => {
  // перебор записей
  entries.forEach((entry) => {
    // если элемент появился
    if (entry.isIntersecting) {
      changeNavClass(entry.target.id);
      changeUrl(entry.target.id);
    }
  });
},
{
  threshold: 0.9
});
const elements = document.querySelectorAll('.guide__item');
elements.forEach((element)=>sectionObserver.observe(element));
const elementStart = document.querySelector('#start');
sectionObserver.observe(elementStart);
//--FUNCTIONS

function changeNavClass(id) {
  //1. Удалить этот класс "активный" у прежнего элемента
  const navItems = document.querySelectorAll('.page__nav-item--active');
  navItems.forEach((item)=>{
    item.classList.remove('page__nav-item--active');
  });
  //2. Добавить этот класс "активный" новому элементу
  const navLink = document.querySelector(`.page__nav-link[href="#${id}"]`);
  if (navLink) {
    const navItem = navLink.parentElement;
    navItem.classList.add('page__nav-item--active');
  }
}

function changeUrl(id) {
  window.location.hash = `#${id}`;
}
