import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadDataDialogComponent } from './load-data-dialog.component';

describe('LoadDataDialogComponent', () => {
  let component: LoadDataDialogComponent;
  let fixture: ComponentFixture<LoadDataDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ LoadDataDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
