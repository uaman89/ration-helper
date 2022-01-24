import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientsGroupComponent } from './ingredients-group.component';

describe('IngredientsSetComponent', () => {
  let component: IngredientsGroupComponent;
  let fixture: ComponentFixture<IngredientsGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientsGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
