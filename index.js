const button = document.getElementById('theme-toggle');
button.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
});

const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDarkMode ? 'Тёмный режим включен.' : 'Тёмный режим выключен.');
if (isDarkMode) document.body.classList.toggle('theme-dark');

document.addEventListener("scroll", function() {
    const elements = document.querySelectorAll('.fade-in');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        // Проверяем, находится ли элемент на середине видимой области
        if (rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25) {
            element.classList.add('visible');
        }
    });

    // Проверяем, достигнут ли конец страницы
    if (window.scrollY + windowHeight >= document.body.offsetHeight) {
        elements.forEach(element => {
            element.classList.add('visible');
        });
    }
});

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Отменяем стандартное поведение ссылки
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка к элементу
        targetElement.classList.add('highlight'); // Добавляем класс подсветки
        setTimeout(() => {
            targetElement.classList.remove('highlight'); // Убираем класс через 1 секунду
        }, 1000);
    });
});
