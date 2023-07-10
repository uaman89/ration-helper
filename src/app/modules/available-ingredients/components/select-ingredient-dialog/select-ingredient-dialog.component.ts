import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-select-ingredient-dialog',
  templateUrl: './select-ingredient-dialog.component.html',
  styleUrls: ['./select-ingredient-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatDividerModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgIf,
    MatSliderModule,
    MatButtonModule,
  ],
})
export class SelectIngredientDialogComponent implements OnInit {
  form!: UntypedFormGroup;

  readonly MIN_WEIGHT = 1;
  inputStep!: number;

  constructor(
    public dialogRef: MatDialogRef<SelectIngredientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectIngredientDialogData,
    private fb: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    const { weight } = this.data.ingredient;
    this.form = this.fb.group({
      weight: [
        weight,
        [Validators.max(weight), Validators.min(this.MIN_WEIGHT)],
      ],
    });

    this.inputStep = weight < 11 ? 1 : weight / 4;
  }

  onConfirm() {
    const selectedWeight = this.form.get('weight')?.value;
    this.dialogRef.close({
      ...this.data.ingredient,
      weight: selectedWeight,
    } as IngredientPlan);
  }

  c(key: string): UntypedFormControl {
    return this.form.get(key) as UntypedFormControl;
  }

  getErrorMessage(control: UntypedFormControl): string {
    const [firstError] = Object.keys(control.errors || {});
    switch (firstError) {
      case 'min':
        return `Weight can't be less than ${this.MIN_WEIGHT}g`;
      case 'max':
        return `It's ${this.data.ingredient.weight}g of ${this.data.ingredient.name} availble`;
      default:
        return 'invalid weight';
    }
  }

  onSliderChange(value: number) {
    if (value < 1) {
      value = 1;
    } else {
      value = Math.round(value);
    }
    this.form.get('weight')?.patchValue(value);
  }
}

export interface SelectIngredientDialogData {
  ingredient: IngredientPlan;
}
