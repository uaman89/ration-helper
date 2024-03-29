import { IngredientsGroup } from "../interfaces/ingredients-group.interace";
import { INGREDIENTS } from "./ingredients";

export const SASHA_PLAN: IngredientsGroup[] = [
  {
    label: '1',
    id: 1,
    ingredients: [
      { ...INGREDIENTS.beans, weight: 60 },
      { ...INGREDIENTS.soy, weight: 60 },
      { ...INGREDIENTS.oat, weight: 60 },
      { ...INGREDIENTS.bulgur, weight: 60 },
      { ...INGREDIENTS.buckweat, weight: 60 },
      { ...INGREDIENTS.rice, weight: 60 },
      { ...INGREDIENTS.cereals, weight: 60 },
      { ...INGREDIENTS.seitan, weight: 60 },
      { ...INGREDIENTS.macaroni, weight: 60 },
      { ...INGREDIENTS.flour, weight: 60 },
      { ...INGREDIENTS.bread, weight: 100 },
      { ...INGREDIENTS.pita, weight: 100 },
      { ...INGREDIENTS.corn, weight: 200 },
      { ...INGREDIENTS.potato, weight: 200 },
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
      { ...INGREDIENTS.eggs, weight: 6 }, // todo add ability use not weight but  (pcs / g)
      { ...INGREDIENTS.cottageChees, weight: 500 },
      { ...INGREDIENTS.beans, weight: 120 },
      { ...INGREDIENTS.oat, weight: 120 },
      { ...INGREDIENTS.bulgur, weight: 120 },
      { ...INGREDIENTS.buckweat, weight: 120 },
      { ...INGREDIENTS.rice, weight: 120 },
      { ...INGREDIENTS.cereals, weight: 120 },
      { ...INGREDIENTS.macaroni, weight: 120 },
      { ...INGREDIENTS.flour, weight: 120 },
      { ...INGREDIENTS.potato, weight: 400 },
      { ...INGREDIENTS.corn, weight: 400 },
      { ...INGREDIENTS.bread, weight: 200 },
      { ...INGREDIENTS.pita, weight: 200 },
      { ...INGREDIENTS.crispbread, weight: 200 },
    ],
  },
  {
    label: '4',
    id: 4,
    ingredients: [
      { ...INGREDIENTS['vegetables'], weight: 600 },
      { ...INGREDIENTS['mushrooms'], weight: 600 },
    ],
  },
  {
    label: '5',
    id: 5,
    ingredients: [
      { ...INGREDIENTS.oil, weight: 2 },
      { ...INGREDIENTS.avocado, weight: 50 },
      { ...INGREDIENTS.olives, weight: 50 },
      { ...INGREDIENTS.mustard, weight: 20 },
    ],
  },
  {
    label: '6',
    id: 6,
    ingredients: [
      { ...INGREDIENTS.sourСream, weight: 60 },
      { ...INGREDIENTS.butter, weight: 18 },
      { ...INGREDIENTS.freshCheese, weight: 40 },
      { ...INGREDIENTS.semiHardCheese, weight: 26 },
    ],
  },
  {
    label: '7',
    id: 7,
    ingredients: [
      { ...INGREDIENTS.fruits, weight: 400 },
      { ...INGREDIENTS.banana, weight: 220 },
    ],
  },
  {
    label: '8',
    id: 8,
    ingredients: [
      { ...INGREDIENTS.cottageChees, weight: 250 },
      { ...INGREDIENTS.eggs, weight: 3 }, // todo add ability use not weight but  (pcs / g)
      { ...INGREDIENTS.beans, weight: 60 },
      { ...INGREDIENTS.oat, weight: 60 },
      { ...INGREDIENTS.bulgur, weight: 60 },
      { ...INGREDIENTS.buckweat, weight: 60 },
      { ...INGREDIENTS.rice, weight: 60 },
      { ...INGREDIENTS.cereals, weight: 60 },
      { ...INGREDIENTS.macaroni, weight: 60 },
      { ...INGREDIENTS.flour, weight: 60 },
      { ...INGREDIENTS.potato, weight: 200 },
      { ...INGREDIENTS.corn, weight: 200 },
      { ...INGREDIENTS.bread, weight: 100 },
      { ...INGREDIENTS.pita, weight: 100 },
      { ...INGREDIENTS.crispbread, weight: 100 },
    ],
  },
  {
    label: '9',
    id: 9,
    ingredients: [{ ...INGREDIENTS.nuts, weight: 25 }],
  },
  {
    label: '10',
    id: 10,
    ingredients: [
      { ...INGREDIENTS.sweets, weight: 30 },
      { ...INGREDIENTS.driedFruits, weight: 30 },
      { ...INGREDIENTS.honey, weight: 30 },
      { ...INGREDIENTS.fruits, weight: 400 },
    ],
  },
];
