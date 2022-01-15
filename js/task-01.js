// Подсчет элементов li.item
const itemWithClass = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemWithClass.length}`);


// Текст заголовка и количество элементов в категории
const titles = document.querySelectorAll('h2');

for (const title of titles) {
    console.log(`Category: ${title.textContent}`);
    const listOfItemsInCategory = title.nextElementSibling;
    const itemsArrey = listOfItemsInCategory.querySelectorAll('li');
    console.log(`Elements: ${itemsArrey.length}`);
}




