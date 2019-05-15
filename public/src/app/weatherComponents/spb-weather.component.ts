import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { getWeatherFromCity } from '../manipulators';
import { WeatherInfo } from '../weatherInfo';

@Component({
  selector: 'app-spb-weather',
  templateUrl: '../weather.component.html',
  styleUrls: ['../weather.component.css']
})

export class SpbWeatherComponent implements OnInit {
  weatherInfo: WeatherInfo = {name:'', humidity: 0, temp: 0, temp_high: 0, temp_min: 0, status: ''}
  imgUrl: string = "https://www.accessmba.com/application/public/cache/event-spb-ru-620x370.jpg";
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.weatherInfo = getWeatherFromCity(this._httpService, 'Saint Petersburg', this.weatherInfo);
  }
}
