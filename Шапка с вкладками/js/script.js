const tabList = document.querySelector('#tabList');
const tabcontent = document.querySelectorAll('.tabcontent');
const tablinks = document.querySelectorAll('.tablink');

const defaultOpen = document.querySelector('#defaultOpen');
const tabActive = document.querySelector('.tabcontent.active');

// Функция getComputedStyle(element) - позволяет получить значение любого CSS свойства элемента, даже из CSS файла.

console.log(getComputedStyle(tabActive).backgroundColor);

// Устанвить для кнопки по умолчанию такой же цвет как у активной вкладки
defaultOpen.style.backgroundColor = getComputedStyle(tabActive).backgroundColor;

tabList.addEventListener('click', (e) => {
    const targetElement = e.target;
    console.log(targetElement);
    // элемент.dataset.имя - обращение к data атрибуту с указанным именем 
    const dataCity = targetElement.dataset.city;
    console.log(dataCity);

    // Перебрать все вкладки с контентом
    for (let tab of tabcontent) {
        tab.classList.remove('active');
        if (tab.id == dataCity) {
            tab.classList.add('active');
        }
    }
})