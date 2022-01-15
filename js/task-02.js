const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const itemsArrey = [];

for (const ingredient of ingredients) {
  const itemOfIngredients = document.createElement('li');
  itemOfIngredients.textContent = ingredient;

  itemOfIngredients.classList.add('item');
  itemsArrey.push(itemOfIngredients);
}

const list = document.querySelector('ul');
  list.append(...itemsArrey);