import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, TOPComponent } from './components';
import { LWXComponent } from './components/LWX/lwx.component';


const routes: Routes = [
  { 
    path: 'LWX',
    component: LWXComponent,
  },
  { 
    path: 'TOP',
    component: TOPComponent,
  },
  { 
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
