import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlanKeys, availablePlans } from './core/constants/constants';
import { IngredientsGroup } from './core/interfaces/ingredients-group.interace';
import { PlannerContainerComponent } from './modules/planner-container/planner-container.component';
import { IngradientSelectService } from './modules/planner-container/planner-container.service';
import { AvailablePlan } from './core/interfaces/available-plan.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    PlannerContainerComponent,
  ],
})
export class AppComponent implements OnInit {
  selectedPlan?: IngredientsGroup[];
  availablePlans: AvailablePlan[] = Object.entries(availablePlans).map(
    ([key, value]) => ({ key, value }),
  );

  constructor(private plannerService: IngradientSelectService) {}

  ngOnInit() {
    this.onChangePlan(this.availablePlans[1]);
  }

  onChangePlan({ key, value }: AvailablePlan) {
    this.plannerService.clearSelectedIngredients();
    this.plannerService.selectedPlanName = key;
    this.selectedPlan = value;
  }
}
