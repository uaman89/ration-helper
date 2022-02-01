import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

/**
 get every selected ingr. which belongs to current group
 calc it's proportion
 sum proportions of every selected ingr.
 if proportion > 1 - no availble ingredients
 if < 1, then fill ingredients list with planGroup ingredients and multiply it's weights on (1 - totalProportion)

 @returns {number} from 0 to 1, where 1 means the set of seleted ingredients is equivalent to planned
 */
export function getCompletionProportion( selected: IngredientPlan[], planned: IngredientPlan[] ): number {
  return selected.reduce<number>((total, selectedItem) => {
    const plannedItem = planned.find((d) => d.id === selectedItem.id);
    if (!plannedItem) {
      console.warn('should not happen');
      return total;
    }
    const proportion = selectedItem.weight / plannedItem.weight;

    return total + proportion;
  }, 0);
}
