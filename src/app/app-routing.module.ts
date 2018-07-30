import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectlistComponent } from './pages/project/projectlist/projectlist.component';

const routes : Routes = [
 { path: 'project', component: ProjectlistComponent },
];




@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
