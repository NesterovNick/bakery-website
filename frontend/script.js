// Ждем, когда вся структура DOM (наш HTML) загрузится
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll(".nav a");

    let isManualScroll = true;

    navLinks.forEach(link =>  {
        link.addEventListener('click', function() {
            isManualScroll = false;
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            setTimeout(() => {
                isManualScroll = true;
            }, 1000);
        });
    });




    window.addEventListener('scroll', function() {
        if (!isManualScroll) return;

    let current = '';
    const windowHeight = window.innerHeight;
    const scrollPosition = window.pageYOffset + (windowHeight / 2);

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionBottom = sectionTop + sectionHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});




    // Находим ВСЕ кнопки "В корзину" на странице
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    // Для каждой найденной кнопки...
    addToCartButtons.forEach(button => {
        // ...вешаем обработчик события "клик"
        button.addEventListener('click', function() {
            // Сохраняем оригинальный текст кнопки, если он еще не сохранен
            if (!this.originalText) {
                this.originalText = this.textContent;
            }

            // Меняем текст и стиль кнопки
            this.textContent = 'Букет в корзине!';
            this.style.backgroundColor = '#e74c3c'; // Серый цвет
            this.disabled = true; // Делаем кнопку неактивной

            // Через 2 секунды возвращаем всё как было
            const buttonElement = this; // Сохраняем ссылку на эту кнопку
            setTimeout(function() {
                buttonElement.textContent = buttonElement.originalText;
                buttonElement.style.backgroundColor = '';
                buttonElement.disabled = false;
            }, 5000);
        });
    });

});
