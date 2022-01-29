import { Ingredient } from './interfaces/ingredient.interface';
import { IngredientsGroup } from './interfaces/ingredients-group.interace';

export const defaultingredient: Ingredient = {
  name: 'невідомий продукт',
  weight: 0,
};

export const sashaSet: IngredientsGroup[] = [
  {
    label: '1',
    id: 1,
    ingredients: [
      { name: 'бобові', weight: 60 },
      { name: 'соя', weight: 60 },
      { name: 'вівснка', weight: 60 },
      { name: 'булгур', weight: 60 },
      { name: 'гречка', weight: 60 },
      { name: 'рис', weight: 60 },
      { name: 'крупи', weight: 60 },
      { name: 'сейтан', weight: 60 },
      { name: 'борошно', weight: 60 },
      { name: 'хліб', weight: 100 },
      { name: 'лаваш', weight: 100 },
      { name: 'кукурудза', weight: 200 },
      { name: 'картопля', weight: 200 },
    ],
  },
  {
    label: '2',
    id: 2,
    ingredients: [
      { name: 'молоко', weight: 400 },
      { name: 'кефір', weight: 400 },
      { name: 'йогурт', weight: 400 },
    ],
  },
  {
    label: '3',
    id: 3,
    ingredients: [
      { name: 'овочі', weight: 600 },
      { name: 'гриби', weight: 600 },
    ],
  },
];
