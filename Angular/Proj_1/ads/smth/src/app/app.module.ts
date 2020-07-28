import { MaterialModule } from './material-module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsComponent } from './tabs/tabs.component';
import { GridComponent } from './grid/grid.component';
import { CardsComponent } from './cards/cards.component';
// import { CurrencyComponent } from './currency/currency.component';
import { CurrencyModule } from './currency/currency.module';
import{ DataService} from './data.service';
import { ProfileService} from './profile.service';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    GridComponent,
    CardsComponent,
    NewsComponent,
    // CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    CurrencyModule
  ],
  providers: [
    ProfileService,
    DataService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
