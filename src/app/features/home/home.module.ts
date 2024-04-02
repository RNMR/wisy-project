import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_COMPONENTS } from './components';
import { UiModule } from '../ui/ui.module';
import { HomeRoutingModule } from './home-routing.module';
import { WeatherService } from './services/kansas-weather.service';
import { HttpClientModule } from '@angular/common/http';


// import { AuthCommonsModule } from './commons/commons.module';


@NgModule({
  declarations: [
    ...HOME_COMPONENTS,
  ],
  imports: [
    CommonModule,
    UiModule,
    HomeRoutingModule,
    HttpClientModule,
  ],
  providers: [
    WeatherService,
  ],
})
export class HomeModule { }
