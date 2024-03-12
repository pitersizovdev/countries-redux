//Анимация header 
gsap.from(".header-logo", { duration: 1, x: -200, opacity: 0, stagger: 0.5 });
gsap.from("ul li", { duration: 1, y: -50, opacity: 0, stagger: 0.2, delay: 0.5 });
gsap.from("header span", { duration: 1, y: 50, opacity: 0, delay: 1 });
gsap.from(".dost", { duration: 1, x: -200, opacity: 0, ease: "power2.out", delay: 1.5 });


//Анимация формы
gsap.registerPlugin(ScrollTrigger);

gsap.from(".form-container", {
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%",
        end: "top 50%",
    }
});

gsap.from(".contact h1", {
    duration: 1,
    x: -200,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
    scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%",
        end: "top 50%",
    }
});

gsap.from(".form-card", {
    duration: 1,
    x: 200,
    opacity: 0,
    ease: "power2.out",
    delay: 0.5,
    scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%",
        end: "top 50%",
    }
});

gsap.from(".contact span", {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%",
        end: "top 50%",
    }
});

gsap.from("button", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out",
    delay: 1,
    scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%",
        end: "top 50%",
    }
});

gsap.from(".check", {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: "power2.out",
    delay:1.5,
    scrollTrigger: {
        trigger: ".form-container",
        start: "top 80%",
        end: "top 50%",
    }
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // отмена перезагрузки формы при ее отправке
});


//Анимация карточек товаров
// Получаем все карточки товаров
const itemCards = document.querySelectorAll('.item-card');

// Скрываем все карточки
gsap.set(itemCards, { opacity: 0, y: 50 });

// Добавляем слушатель события прокрутки
window.addEventListener("scroll", function() {
    // Получаем элемент с id "items"
    const itemsSection = document.getElementById("items");

    // Проверяем, виден ли раздел "items" на экране
    if (isInViewport(itemsSection)) {
        // Анимируем появление карточек
        itemCards.forEach((card, index) => {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.5, // Задержка для поочередного появления
                ease: "power2.out"
            });
        });

        // Удаляем слушатель события прокрутки, чтобы анимация происходила только один раз
        window.removeEventListener("scroll", this);
    }
});

// Функция для определения, виден ли элемент на экране
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

