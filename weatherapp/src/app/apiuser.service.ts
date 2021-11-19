import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiuserService {

  constructor(private http : HttpClient) { }


  getWeather(location:string){
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b71f5ead6722945f18331797304844a4`);
  }
}
