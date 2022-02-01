import {
  ChangeDetectionStrategy, Component, Inject, OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { IngredientPlan } from 'src/app/core/interfaces/ingredient.interface';

@Component({
  selector: 'app-select-ingredient-dialog',
  templateUrl: './select-ingredient-dialog.component.html',
  styleUrls: ['./select-ingredient-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectIngredientDialogComponent implements OnInit {
  form!: FormGroup;

  readonly MIN_WEIGHT = 1;
  inputStep!: number;

  constructor(
    public dialogRef: MatDialogRef<SelectIngredientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SelectIngredientDialogData,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    const { weight } = this.data.ingredient;
    this.form = this.fb.group({
      weight: [
        weight,
        [Validators.max(weight), Validators.min(this.MIN_WEIGHT)],
      ],
    });
    const divider = weight > 100 ? 3 : 2;
    this.inputStep = Math.round(weight / divider);
  }

  onConfirm() {
    const selectedWeight = this.form.get('weight')?.value;
    this.dialogRef.close({
      ...this.data.ingredient,
      weight: selectedWeight
    } as IngredientPlan);
  }

  c(key: string): FormControl {
    return this.form.get(key) as FormControl;
  }

  getErrorMessage(control: FormControl): string {
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
}

export interface SelectIngredientDialogData {
  ingredient: IngredientPlan;
}
