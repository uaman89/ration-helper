import { AsyncPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Inject,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { availablePlans } from 'src/app/core/constants/constants';
import { StorageService } from 'src/app/core/interfaces/data-saver.interface';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';
import { AvailableIngredientsComponent } from '../available-ingredients/available-ingredients.component';
import { MealPlanComponent } from '../meal-planner/meal-planner.component';
import { IngradientSelectService } from './planner-container.service';
import { STORAGE_SERVICE } from 'src/app/core/constants/config';
import { LocalStorageService } from 'src/app/core/services/LocalStorageService';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MealPlanComponent,
    AvailableIngredientsComponent,
    AsyncPipe,
  ],
  providers: [{ provide: STORAGE_SERVICE, useClass: LocalStorageService }],
})
export class PlannerContainerComponent implements OnInit {
  selectedIngredients$ = this.plannerService.selectedIngredients$;

  @Input() currentPlan?: IngredientsGroup[];

  readonly availablePlans = availablePlans;

  constructor(
    private plannerService: IngradientSelectService,
    @Inject(STORAGE_SERVICE) private storageService: StorageService,
  ) {}

  ngOnInit(): void {}

  onRemoveIngredient({ groupId, id }: SelectedIngredientPlan) {
    this.plannerService.removeIngredientFromSelected(groupId, id);
  }

  onSavePlan() {
    const planId = `${this.plannerService.selectedPlanName}_${new Date().toISOString()}`;
    this.storageService.save(planId, this.plannerService.selectedIngredients);
    console.info('plan saved as ', planId);
  }
}
