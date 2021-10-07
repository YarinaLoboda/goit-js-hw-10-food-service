import dataFoods from '../data/data.json';
import createFoodCardTempl from '../templates/food-cards.hbs';

////// RUN //////

const foodCardsMarkup = createFoodCardTempl(dataFoods);
const foodCardsContainerRef = document.querySelector('ul.js-menu');
foodCardsContainerRef.insertAdjacentHTML('beforeend', foodCardsMarkup);
