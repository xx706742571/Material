import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppComponent } from './app.component';
//import { ProjectlistComponent } from './pages/project/projectlist/projectlist.component';

@NgModule({
  declarations: [
    AppComponent,
 //   ProjectlistComponent
  ],
  imports: [
    BrowserModule,
 //   Ng2SmartTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
