import { IngredientsGroup } from "../interfaces/ingredients-group.interace";
import { INGREDIENTS } from "./ingredients";

export const YULIIA_PLAN: IngredientsGroup[] = [
  {
    label: '1',
    id: 1,
    ingredients: [
      { ...INGREDIENTS.beans, weight: 40 },
      { ...INGREDIENTS.soy, weight: 40 },
      { ...INGREDIENTS.oat, weight: 40 },
      { ...INGREDIENTS.bulgur, weight: 40 },
      { ...INGREDIENTS.buckweat, weight: 40 },
      { ...INGREDIENTS.rice, weight: 40 },
      { ...INGREDIENTS.cereals, weight: 40 },
      { ...INGREDIENTS.seitan, weight: 40 },
      { ...INGREDIENTS.macaroni, weight: 40 },
      { ...INGREDIENTS.flour, weight: 40 },
      { ...INGREDIENTS.bread, weight: 60 },
      { ...INGREDIENTS.pita, weight: 60 },
      { ...INGREDIENTS.corn, weight: 140 },
      { ...INGREDIENTS.potato, weight: 140 },
    ],
  },
  {
    label: '2',
    id: 2,
    ingredients: [
      { ...INGREDIENTS['milk'], weight: 350 },
      { ...INGREDIENTS['kefir'], weight: 350 },
      { ...INGREDIENTS['yogurt'], weight: 350 },
    ],
  },
  {
    label: '3',
    id: 3,
    ingredients: [
      { ...INGREDIENTS.eggs, weight: 6 }, // todo add ability use not weight but  (pcs / g)
      { ...INGREDIENTS.fish, weight: 280 },
      { ...INGREDIENTS.fatFish, weight: 200 },
      { ...INGREDIENTS.seaFood, weight: 340 },
      { ...INGREDIENTS.seitan, weight: 100 },
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
      { ...INGREDIENTS.fruits, weight: 200 },
      { ...INGREDIENTS.banana, weight: 110 },
    ],
  },
  {
    label: '8',
    id: 8,
    ingredients: [
      { ...INGREDIENTS.cottageChees, weight: 140 },
      { ...INGREDIENTS.eggs, weight: 3 }, // todo add ability use not weight but  (pcs / g)
      { ...INGREDIENTS.fish, weight: 140 },
      { ...INGREDIENTS.fatFish, weight: 100 },
      { ...INGREDIENTS.seaFood, weight: 170 },
      { ...INGREDIENTS.seitan, weight: 50 },
    ],
  },
  {
    label: '9',
    id: 9,
    ingredients: [{ ...INGREDIENTS.nuts, weight: 15 }],
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
