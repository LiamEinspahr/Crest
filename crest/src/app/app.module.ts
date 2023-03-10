//Default modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ÉµAnimationGroupPlayer } from '@angular/animations';



//Custom page componenets
import { HomeComponent } from './home';
import { UnitsComponent } from './units/units.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { CrestsComponent } from './crests/crests.component';

//Custom functional components
import { BottomNavigationComponent } from './bottomnavigation/bottomnavigation.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { HeaderContainerComponent } from './headercontainer/headercontainer.component';

//Angular Material Modules
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { TabsearchComponent } from './tabsearch/tabsearch.component';




@NgModule({
  declarations: [
    AppComponent,
    //custom page components
    HomeComponent,
    UnitsComponent,
    EquipmentComponent,
    CrestsComponent,
    //custom functional components
    BottomNavigationComponent,
    WelcomescreenComponent,
    SearchBarComponent,
    HeaderContainerComponent,
    TabsearchComponent,
  ],
  imports: [
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //imported modules
    MatFormFieldModule,
    MatButtonModule,
    TextFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatTabsModule,
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
