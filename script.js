document.addEventListener("DOMContentLoaded", () => {
    const roseContainer = document.createElement("div");
    roseContainer.classList.add("rose-container");
    document.body.appendChild(roseContainer);

    function createRose() {
        const rose = document.createElement("img");
        rose.src = "images/rose.png"; // Добавь изображение розы в папку images
        rose.classList.add("rose");
        
        let size = Math.random() * 50 + 40; // Размер от 20px до 50px
        rose.style.width = `${size}px`;

        rose.style.left = `${Math.random() * 100}vw`; // Случайная позиция по горизонтали
        rose.style.animationDuration = `${Math.random() * 3 + 2}s`; // Скорость падения (2-5 сек)
        rose.style.animationDelay = `${Math.random() * 2}s`; // Разный старт для каждой розы

        roseContainer.appendChild(rose);

        setTimeout(() => {
            rose.remove();
        }, 5000); // Удаляем розы после падения
    }

    setInterval(createRose, 300); // Создаём новые розы каждые 300 мс
});

document.addEventListener("DOMContentLoaded", () => {
    const kittenImg = document.getElementById("kitten-img");
    const changeBtn = document.getElementById("change-kitten");

    async function fetchKitten() {
        try {
            let response = await fetch("https://api.thecatapi.com/v1/images/search?mime_types=jpg,png"); 
            let data = await response.json();
            if (data.length > 0) {
                kittenImg.src = data[0].url + "?nocache=" + new Date().getTime(); // Добавляем уникальный параметр
            }
        } catch (error) {
            console.error("Ошибка загрузки котёнка:", error);
        }
    }

    changeBtn.addEventListener("click", fetchKitten);

    fetchKitten(); // Загружаем первую картинку при открытии страницы
});


