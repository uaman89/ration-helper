import { IngredientPlan } from "./ingredient.interface";

export interface IngredientsGroup {
  label: string;
  id: number;
  ingredients: IngredientPlan[];
}
