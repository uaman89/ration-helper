import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlannerContainerComponent } from './modules/planner-container/planner-container.component';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { IngradientSelectService } from './modules/planner-container/planner-container.service';
import { PlanKeys, availablePlans } from './core/constants/constants';
import { IngredientsGroup } from './core/interfaces/ingredients-group.interace';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    PlannerContainerComponent,
  ],
})
export class AppComponent {

  selectedPlan: IngredientsGroup[] = availablePlans[PlanKeys.yuliia];
  availablePlans = availablePlans;

  constructor( private plannerService: IngradientSelectService){}

  onChangePlan(selectedPlan: IngredientsGroup[]) {
    this.plannerService.clearSelectedIngredients();
    this.selectedPlan = selectedPlan;
  }
}
