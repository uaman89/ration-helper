import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  IngredientPlan,
  SelectedIngredientPlan,
} from 'src/app/core/interfaces/ingredient.interface';
import { trackById } from 'src/app/shared/track-by.shared';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MealComponent implements OnInit {
  @Input() set ingredients(list: SelectedIngredientPlan[]) {
    this.optimizeList(list);
  }

  uniqueIngredientsList: SelectedIngredient[] = [];

  @Output() ingredientRemoved = new EventEmitter<SelectedIngredientPlan>();

  readonly trackById = trackById;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onRemoveIngredient(data: SelectedIngredient) {
    data.groupIds.forEach((groupId) => {
      this.ingredientRemoved.emit({
        ...data.plan,
        groupId,
      });
    });
  }

  trackByIngredientId(_: number, item: SelectedIngredient) {
    return item.plan.id;
  }

  private optimizeList(list: SelectedIngredientPlan[]) {
    const map = new Map<number, SelectedIngredient>();

    list.forEach((item) => {
      const mapItem: SelectedIngredient =
        map.get(item.id) || new SelectedIngredient(item);
      if (map.has(item.id)) {
        mapItem.plan.weight += item.weight;
      }
      mapItem.groupIds.add(item.groupId);
      map.set(item.id, mapItem);
    });

    this.uniqueIngredientsList = Array.from(map.values());
    this.cdr.markForCheck();
  }
}

class SelectedIngredient {
  plan: IngredientPlan;
  groupIds = new Set<number>();

  constructor({ id, name, weight, amountAlias }: IngredientPlan) {
    this.plan = { id, name, weight, amountAlias };
  }
}
