import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductService } from './services/product.service';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ChartpolarComponent } from './components/chartpolar/chartpolar.component';
import { NgChartsModule } from 'ng2-charts';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewproductComponent,
    NavigationComponent,
    ProductcardComponent,
    ChartpolarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgChartsModule,
    NoopAnimationsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
