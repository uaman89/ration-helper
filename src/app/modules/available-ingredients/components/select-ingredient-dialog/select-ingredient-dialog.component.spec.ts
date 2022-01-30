import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectIngredientDialogComponent } from './select-ingredient-dialog.component';

describe('SelectIngredientDialogComponent', () => {
  let component: SelectIngredientDialogComponent;
  let fixture: ComponentFixture<SelectIngredientDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectIngredientDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectIngredientDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
