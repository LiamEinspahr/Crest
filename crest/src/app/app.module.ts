import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { UnitsComponent } from './units/units.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ɵAnimationGroupPlayer } from '@angular/animations';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { BottomNavigationComponent } from './bottomnavigation/bottomnavigation.component';

import {MatButtonModule} from '@angular/material/button';
import {TextFieldModule} from '@angular/cdk/text-field';
import { CrestsComponent } from './crests/crests.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    UnitsComponent,
    EquipmentComponent,
    WelcomescreenComponent,
    BottomNavigationComponent,
    CrestsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TextFieldModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
