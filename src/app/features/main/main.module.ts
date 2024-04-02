import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MAIN_COMPONENTS } from './components';
import { UiModule } from '../ui/ui.module';


// import { AuthCommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [
    ...MAIN_COMPONENTS,
  ],
  imports: [
    CommonModule,
    UiModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
