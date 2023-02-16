import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrestsComponent } from './crests/crests.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HomeComponent } from './home';
import { UnitsComponent } from './units/units.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';

const routes: Routes = [
  { path: '', component: WelcomescreenComponent },
  { path: 'home', component: HomeComponent},
  { path: 'units', component: UnitsComponent},
  { path: 'equipment', component: EquipmentComponent},
  { path: 'crests', component: CrestsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
