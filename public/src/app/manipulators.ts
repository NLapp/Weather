import { HttpService } from './http.service';
import { WeatherInfo } from './weatherInfo';

export function getWeatherFromCity(service: HttpService, city:string, weatherInfo: WeatherInfo): WeatherInfo{
    let observable = service.getWeatherFromApi(city);
    observable.subscribe((data: any) => {
      weatherInfo.name = data.name;
      weatherInfo.humidity = data.main.humidity;
      weatherInfo.temp = +(data.main.temp - 273.15).toFixed(2);
      weatherInfo.temp_high = +(data.main.temp_max - 273.15).toFixed(2);
      weatherInfo.temp_min = +(data.main.temp_min - 273.15).toFixed(2);
      weatherInfo.status = data.weather[0].description;
    });
    return weatherInfo;
  }