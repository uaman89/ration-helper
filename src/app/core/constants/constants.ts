import { INGREDIENTS } from 'src/app/core/constants/ingredients';
import { IngredientPlan } from '../interfaces/ingredient.interface';
import { IngredientsGroup } from '../interfaces/ingredients-group.interace';

export const defaultingredient: IngredientPlan = {
  id: 0,
  name: 'невідомий продукт',
  weight: 0,
};

export const sashaSet: IngredientsGroup[] = [
  {
    label: '1',
    id: 1,
    ingredients: [
      { ...INGREDIENTS.beans, weight: 60},
      { ...INGREDIENTS.soy,  weight: 60 },
      { ...INGREDIENTS.oat,  weight: 60 },
      { ...INGREDIENTS.bulgur,  weight: 60 },
      { ...INGREDIENTS.buckweat,  weight: 60 },
      { ...INGREDIENTS.rice,  weight: 60 },
      { ...INGREDIENTS.cereals,  weight: 60 },
      { ...INGREDIENTS.seitan,  weight: 60 },
      { ...INGREDIENTS.flour,  weight: 60 },
      { ...INGREDIENTS.bread,  weight: 100 },
      { ...INGREDIENTS.pita,  weight: 100 },
      { ...INGREDIENTS.corn,  weight: 200 },
      { ...INGREDIENTS.potato,  weight: 200 },
    ],
  },
  {
    label: '2',
    id: 2,
    ingredients: [
      { ...INGREDIENTS['milk'], weight: 400 },
      { ...INGREDIENTS['kefir'], weight: 400 },
      { ...INGREDIENTS['yogurt'], weight: 400 },
    ],
  },
  {
    label: '3',
    id: 3,
    ingredients: [
      { ...INGREDIENTS['vegetables'], weight: 600 },
      { ...INGREDIENTS['mushrooms'], weight: 600 },
    ],
  },
];
