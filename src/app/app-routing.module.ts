import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { RgpdComponent } from './component/rgpd/rgpd.component';
import { PanierComponent } from './component/panier/panier.component';
import { ValideComponent } from './component/valide/valide.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rgpd', component: RgpdComponent},
  {path: 'panier', component: PanierComponent},
  {path: 'valide', component: ValideComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
