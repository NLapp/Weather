import { Component,OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { getWeatherFromCity } from './manipulators';
import { WeatherInfo } from './weatherInfo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'public';
  weatherInfo: WeatherInfo = {name:'', humidity: 0, temp: 0, temp_high: 0, temp_min: 0, status: ''}
  imgUrl: string = "https://topspb.tv/768x432/uploaded/covers/02poltkvartiry.jpg";
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.weatherInfo = getWeatherFromCity(this._httpService, 'Moscow', this.weatherInfo);
  }
}
