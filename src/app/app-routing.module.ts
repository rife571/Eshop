import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { ProductsComponent } from './components/products/products.component';
import { ChartpolarComponent } from './components/chartpolar/chartpolar.component'

const routes: Routes = [
  {path:'' , component: ProductsComponent},
  {path:'prodotti' , component: ProductsComponent},
  {path:'nuovo' , component: NewproductComponent},
  {path:'andamenti' , component: ChartpolarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
