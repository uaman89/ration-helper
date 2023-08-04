import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import {
  PlanKeys as PlanKey,
  availablePlans,
} from './core/constants/constants';
import { IngredientsGroup } from './core/interfaces/ingredients-group.interace';
import { PlannerContainerComponent } from './modules/planner-container/planner-container.component';
import { IngradientSelectService } from './modules/planner-container/planner-container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  planKeys = Object.keys(availablePlans);

  constructor(private plannerService: IngradientSelectService) {}

  ngOnInit() {
    this.setPlan(PlanKey.sasha);
  }

  onChangePlan(key: PlanKey) {
    this.plannerService.clearSelectedIngredients();
    this.setPlan(key);
  }

  getPlanName(): string {
    return this.plannerService.selectedPlanName;
  }

  getPlanValue(): IngredientsGroup[] {
    if (!this.getPlanName()) {
      return [];
    }
    return availablePlans[this.getPlanName() as PlanKey];
  }

  private setPlan(key: PlanKey) {
    this.plannerService.selectedPlanName = key;
  }
}
