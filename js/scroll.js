// Функция для вычисления нижней границы start-screen с учетом 10px отступа
function setMaxScrollTop() {
  const startScreen = document.getElementById("start-screen");
  return startScreen ? startScreen.offsetTop + startScreen.offsetHeight - 10 : 0;
}

// Инициализируем maxScrollTop и флаг отслеживания
let maxScrollTop = setMaxScrollTop();
let hasScrolledPastMax = false; // Флаг, указывающий, что пользователь прокрутил ниже ограничения

// Устанавливаем начальную позицию прокрутки на самый верх при загрузке страницы
window.onload = function () {
  window.scrollTo(0, 0);
};

// Обработчик прокрутки
window.addEventListener("scroll", () => {
  // Если пользователь прокрутил ниже ограничения, отключаем скролл
  if (window.scrollY > maxScrollTop && !hasScrolledPastMax) {
    hasScrolledPastMax = true;
    document.body.style.overflow = "hidden"; // Блокируем прокрутку
  }
});

// Обновляем maxScrollTop при изменении размеров окна
window.addEventListener("resize", () => {
  maxScrollTop = setMaxScrollTop();
});

// Функция прокрутки на самый верх страницы, возвращающая прокрутку
function scrollToTop() {
  hasScrolledPastMax = false; // Сбрасываем флаг
  document.body.style.overflow = "hidden"; // Блокируем прокрутку
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Добавляем плавность прокрутки
  });
  maxScrollTop = setMaxScrollTop();
}

