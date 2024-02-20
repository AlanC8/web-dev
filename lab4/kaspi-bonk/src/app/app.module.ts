import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { KaspiHeaderComponent } from './kaspi-header/kaspi-header.component';
import { KaspiSearchComponent } from './kaspi-search/kaspi-search.component';
import { KaspiCategoryComponent } from './kaspi-category/kaspi-category.component';
import { KaspiWelcomeComponent } from './kaspi-welcome/kaspi-welcome.component';
import { KaspiProductComponent } from './kaspi-product/kaspi-product.component';
import { KaspiFooterComponent } from './kaspi-footer/kaspi-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalViewComponent } from './modal-view/modal-view.component';

@NgModule({
  declarations: [
    AppComponent,
    KaspiHeaderComponent,
    KaspiSearchComponent,
    KaspiCategoryComponent,
    KaspiWelcomeComponent,
    KaspiProductComponent,
    KaspiFooterComponent,
    ModalViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
