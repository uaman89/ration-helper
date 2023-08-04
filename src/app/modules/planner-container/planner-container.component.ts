import { AsyncPipe, NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { STORAGE_SERVICE } from 'src/app/core/constants/config';
import { availablePlans } from 'src/app/core/constants/constants';
import { StorageService } from 'src/app/core/interfaces/data-saver.interface';
import { SelectedIngredientPlan } from 'src/app/core/interfaces/ingredient.interface';
import { IngredientsGroup } from 'src/app/core/interfaces/ingredients-group.interace';
import { LocalStorageService } from 'src/app/core/services/LocalStorageService';
import { AvailableIngredientsComponent } from '../available-ingredients/available-ingredients.component';
import { MealComponent } from '../meal/meal.component';
import { IngradientSelectService } from './planner-container.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LoadDataDialogComponent } from '../load-data-dialog/load-data-dialog.component';

@Component({
  selector: 'app-planner-container',
  templateUrl: './planner-container.component.html',
  styleUrls: ['./planner-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MealComponent,
    AvailableIngredientsComponent,
    AsyncPipe,
    NgIf,
  ],
})
export class PlannerContainerComponent {
  selectedIngredients$ = this.plannerService.selectedIngredients$;

  @Input() currentPlan?: IngredientsGroup[];

  readonly availablePlans = availablePlans;

  constructor(
    private plannerService: IngradientSelectService,
    @Inject(STORAGE_SERVICE) private storageService: StorageService,
    private dialog: MatDialog
  ) {}

  onRemoveIngredient({ groupId, id }: SelectedIngredientPlan) {
    this.plannerService.removeIngredientFromSelected(groupId, id);
  }

  onSavePlan() {
    const planId = `${
      this.plannerService.selectedPlanName
    }_${new Date().toISOString()}`;
    this.storageService.save(planId, this.plannerService.selectedIngredients);
    console.info('plan saved as ', planId);
  }

  onOpenSavedPlansDialog() {
    this.dialog.open(LoadDataDialogComponent);
  }
}
