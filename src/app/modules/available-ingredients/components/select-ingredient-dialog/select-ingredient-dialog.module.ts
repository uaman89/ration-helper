import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { SelectIngredientDialogComponent } from './select-ingredient-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SelectIngredientDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSliderModule,
  ],
  exports: [SelectIngredientDialogComponent],
})
export class SelectIngredientDialogModule {}
