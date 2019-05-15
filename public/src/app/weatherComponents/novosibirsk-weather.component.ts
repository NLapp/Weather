import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { getWeatherFromCity } from '../manipulators';
import { WeatherInfo } from '../weatherInfo';

@Component({
  selector: 'app-novosibirsk-weather',
  templateUrl: '../weather.component.html',
  styleUrls: ['../weather.component.css']
})

export class NovosibirskWeatherComponent implements OnInit {
  weatherInfo: WeatherInfo = {name:'', humidity: 0, temp: 0, temp_high: 0, temp_min: 0, status: ''}
  imgUrl: string = "http://www.transsiberianfestival.com/media/upload/novosibirsk/Novosib_1.jpg";
  constructor(private _httpService: HttpService){}

  ngOnInit() {
    this.weatherInfo = getWeatherFromCity(this._httpService, 'Novosibirsk', this.weatherInfo);
  }
}