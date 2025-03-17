    // Проверка ширины экрана и замена изображений
    function updateImages() {
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');

        if (window.innerWidth <= 900) {
            image1.src = 'img/home/app-section-2-mobile.jpg'; // Укажите новое изображение для мобильного
            image2.src = 'img/home/app-section-3-mobile.jpg'; // Укажите новое изображение для мобильного
        } else {
            image1.src = 'img/home/app-section-2.jpg'; // Исходное изображение
            image2.src = 'img/home/app-section-3.jpg'; // Исходное изображение
        }
    }

    // Вызов функции при загрузке страницы и изменении размера окна
    window.onload = updateImages;
    window.onresize = updateImages;