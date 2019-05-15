import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as WeatherComponents from './WeatherComponents/weather.components';

const routes: Routes = [
  {path: 'saint petersburg', component: WeatherComponents.SpbWeatherComponent},
  {path: 'novosibirsk', component: WeatherComponents.NovosibirskWeatherComponent},
  {path: '', component: WeatherComponents.MoscowWeatherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
