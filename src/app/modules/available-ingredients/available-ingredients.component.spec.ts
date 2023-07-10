import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableIngredientsComponent } from './available-ingredients.component';

describe('AvailableIngredientsComponent', () => {
  let component: AvailableIngredientsComponent;
  let fixture: ComponentFixture<AvailableIngredientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AvailableIngredientsComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableIngredientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
