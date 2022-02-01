import { IngredientPlan } from '../interfaces/ingredient.interface';
import { IngredientsGroup } from '../interfaces/ingredients-group.interace';
import { SASHA_PLAN } from './sashaPlan';
import { YULIIA_PLAN } from './yulia-plan.constants';

export enum PlanKeys {
  sasha = 'sasha',
  yuliia = 'yuliia',
}

export const defaultingredient: IngredientPlan = {
  id: 0,
  name: 'невідомий продукт',
  weight: 0,
};

export const availablePlans: Record<PlanKeys, IngredientsGroup[]> = {
  [PlanKeys.sasha]: SASHA_PLAN,
  [PlanKeys.yuliia]: YULIIA_PLAN,
};
