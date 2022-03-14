
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { LentesDeSolComponent } from './pages/lentes-de-sol/lentes-de-sol.component';
import { LentesAumentoComponent } from './pages/lentes-aumento/lentes-aumento.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'lentes-de-sol',component:LentesDeSolComponent},
  {path:'lentes-aumento', component:LentesAumentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
