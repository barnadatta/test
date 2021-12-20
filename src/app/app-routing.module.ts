import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  // {path:'about', component:AboutComponent},
  // {path:'contact', component:ContactComponent},
  //{path:'product', loadChildren:'./product-dashboard/product-dashboard.module#ProductDashboardModule'}
// {path : 'product', loadChildren: () => import('./product-dashboard/product-dashboard.module').then(m => m.ProductDashboardModule) },

{path:'contacts', component:ContactsComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
