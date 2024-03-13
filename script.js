//Анимация header 
<<<<<<< HEAD
gsap.from(".header-logo", { duration: 1, x: -200, opacity: 0, stagger: 1 });
=======
gsap.from(".header-logo", { duration: 1, x: -200, opacity: 0, stagger: 0.5, delay: 1});
>>>>>>> 25f4eaa (0.2.2)
gsap.from("header ul li", { duration: 1, y: -50, opacity: 0, stagger: 0.2, delay: 1 });
gsap.from("header span", { duration: 1, y: 50, opacity: 0, delay: 1.5 });
gsap.from(".dost", { duration: 1, x: -200, opacity: 0, ease: "power2.out", delay: 2 });


//Анимация формы
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.contact').forEach(section => {
    ScrollTrigger.create({trigger: section, start: "top center", end: "bottom center",toggleClass: "active",

        onEnter: () => {
            gsap.from(section.querySelector('.form-card'), { opacity: 0, y: 50, duration: 1, delay: 0.5 });
        }
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();    // отмена перезагрузки формы при ее отправке
});


//Анимация карточек товаров
const itemCards = document.querySelectorAll('.item-card');// Получаем все карточки товаров
gsap.set(itemCards, { opacity: 0, y: 50 }); // Скрываем все карточки
window.addEventListener("scroll", function() { // Добавляем слушатель события прокрутки
    const itemsSection = document.getElementById("items");    // Получаем элемент с id "items"
    if (isInViewport(itemsSection)) {    // Проверяем, виден ли раздел "items" на экране
        itemCards.forEach((card, index) => {         // Анимируем появление карточек
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.3, // Задержка для поочередного появления
                ease: "power2.out"
            });
        });
        window.removeEventListener("scroll", this);        // Удаляем слушатель события прокрутки, чтобы анимация происходила только один раз
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


// Отправка почты с проверкой на заполненные поля и чекбокс
function sendEmail(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    if (document.getElementById('check').checked && document.getElementById('name').value && document.getElementById('email').value && document.getElementById('phone').value) {
        document.getElementById('button').textContent = "Отправка ..."; // Изменяем текст на кнопке на "Отправка..."

        let params = {
            name: document.querySelector("#name").value,
            email: document.querySelector("#email").value,
            phone: document.querySelector("#phone").value,
        }

        emailjs.send("service_pnmyv1c","template_3cv48vd",params).then(function() {
            alert("Ваша заявка успешно отправлена!");
            document.getElementById('button').textContent = "Оставить заявку"; // Возвращаем исходный текст кнопки после отправки
        });
    } else {
        alert("Пожалуйста, поставьте галочку согласия.");
    }
}

