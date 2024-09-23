const button = document.getElementById('theme-toggle');
button.addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
});

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