import { Ingredient } from "./ingredient.interface";

export interface IngredientsGroup {
  label: string;
  groupId: number;
  group: Ingredient[];
}
