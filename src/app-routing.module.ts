import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {NbAuthBlockComponent} from '@nebular/auth';
import {NbAuthComponent} from '@nebular/auth';
import { ProjectlistComponent } from './app/pages/project/projectlist/projectlist.component';


const routes: Routes = [
  {
    path: 'project',
    component: ProjectlistComponent,
  },
  
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
