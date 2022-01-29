export interface Ingredient {
  id: number;
  name: string;
}

export interface IngredientPlan extends Ingredient {
  weight: number;
}
