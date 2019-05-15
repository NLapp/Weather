import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import listID from './cityID.json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){}
  getWeatherFromApi(city: string){
  	const id:string = JSON.parse(JSON.stringify(listID))[city];
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=e8370c4bbbb5569b888d546aa308196a`);
  }


}
