// Ждем, когда вся структура DOM (наш HTML) загрузится
document.addEventListener('DOMContentLoaded', function() {

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