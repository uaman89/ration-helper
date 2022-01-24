import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvailableIngredientsModule } from './modules/available-ingredients/available-ingredients.module';
import { MealPlannerModule } from './modules/meal-planner/meal-planner.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MealPlannerModule,
    AvailableIngredientsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
