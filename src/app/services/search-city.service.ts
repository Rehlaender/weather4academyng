import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const searchByCity = "q=";
const searchByCityAndCountry = ",";
const searchByCityId = "id=";
const apiKey = "&APPID=ea07077cbdfd161a3a94b6572515407d";
const useUnits = "&units=metric";
const rootUri = "http://api.openweathermap.org/data/2.5/weather?";

@Injectable()
export class SearchCityService {

  constructor(private http: HttpClient) {}

  searchCity(action) {
    const { city, country, id, searchBy } = action.payload;
    console.log(searchBy, 'asdfu');
    switch (searchBy) {
      case "byCity":
        return this.http.get(`${rootUri}${searchByCity}${city}${useUnits}${apiKey}`);
      case "byCityAndCountry":
        return this.http.get(`${rootUri}${searchByCity}${city}${searchByCityAndCountry}${country}${useUnits}${apiKey}`);
      case "byId":
        return this.http.get(`${rootUri}${searchByCityId}${useUnits}${apiKey}`);
      }
    }
}
