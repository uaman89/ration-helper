import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlannerContainerComponent } from './modules/planner-container/planner-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    MatToolbarModule,
    PlannerContainerComponent,
  ],
})
export class AppComponent {
  title = 'Ration Helper';
}
