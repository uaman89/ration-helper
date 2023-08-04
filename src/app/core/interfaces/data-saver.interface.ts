import { SelectedIngredientPlan } from "./ingredient.interface";

export interface StorageService {
  save: (planId: string, data: object) => void;
  load: (planId: string) => SelectedIngredientPlan[];
  remove?: (planId: string) => void;
  getSavedPlanList: () => string[];
}
