export interface Ingredient {
  id: number;
  name: string;
  amountAlias?: string;
}

export interface IngredientPlan extends Ingredient {
  weight: number;
}

export interface SelectedIngredientPlan extends IngredientPlan {
  groupId: number;
}
