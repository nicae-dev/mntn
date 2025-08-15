# Проект MNTN
## Описание
* Реализация макета одностраничного сайта с Figma: [MNTN - Landing Page](https://www.figma.com/community/file/788675347108478517/mntn-landing-page) или этот макет в [формате JPEG](maket.jpg)
* Так как не описано поведение при прокрутке страницы, частично ориентировалась на [реализацию от автора макета](https://mntn.krystonschwarze.com)
* Исходный код в [папке source](source)
* Live-версия на [github-pages](https://nicae-dev.github.io/mntn)

  ## Особенности:
  * Одностраничный сайт
  * Ширина 1920px
  * Нет адаптивности под другие размеры экрана (не предусмотрена макетом)
  * Hero-фон старается занять всю высоту экрана
  * Для конвертации SCSS в CSS используется сборка на gulp 4 версии от HTML Academy

## Технологии
* HTML5
* SCSS
* БЭМ
* JS, [Intersection Observer API](https://developer.mozilla.org/ru/docs/Web/API/Intersection_Observer_API)

## Планируется
* &check; Сделать паралакс ([пример 1](https://htmlacademy.ru/blog/css/parallax), [пример 2](https://github.com/KiaanCastillo/Pure-CSS-Multilayer-Parallax))
* Сделать минимальную адаптивность
