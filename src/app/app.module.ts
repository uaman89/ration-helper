import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealPlannerModule } from './modules/meal-planner/meal-planner.module';
import { MealModule } from './modules/meal/meal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MealPlannerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
