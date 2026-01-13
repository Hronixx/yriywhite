// Плавная прокрутка к якорям для ВСЕХ ссылок (включая кнопки)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        // Если кликнули на кнопку внутри ссылки - обрабатываем отдельно
        if (e.target.tagName === 'BUTTON') {
            e.preventDefault();
            e.stopPropagation();
            
            const targetId = this.getAttribute('href');
            scrollToAnchor(targetId);
            return;
        }
        
        // Обычная ссылка
        e.preventDefault();
        const targetId = this.getAttribute('href');
        scrollToAnchor(targetId);
    });
});

// Общая функция для прокрутки
function scrollToAnchor(targetId) {
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        // Плавная прокрутка
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
        
        // Обновляем URL
        history.pushState(null, null, targetId);
    }
}

