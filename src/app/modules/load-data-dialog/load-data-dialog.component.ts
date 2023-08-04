import { CommonModule, NgFor } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { STORAGE_SERVICE } from 'src/app/core/constants/config';
import { StorageService } from 'src/app/core/interfaces/data-saver.interface';
import { IngradientSelectService } from '../planner-container/planner-container.service';

@Component({
  selector: 'app-load-data-dialog',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './load-data-dialog.component.html',
  styleUrls: ['./load-data-dialog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadDataDialogComponent implements OnInit {
  savedPlans!: string[];

  constructor(
    @Inject(STORAGE_SERVICE) private storageService: StorageService,
    private plannerService: IngradientSelectService,
  ) {}

  ngOnInit() {
    this.savedPlans = this.storageService.getSavedPlanList();
  }

  loadPlan(savedPlanId: string) {
    this.plannerService.setSelectedIngredients(
      this.storageService.load(savedPlanId),
    );
  }
}
