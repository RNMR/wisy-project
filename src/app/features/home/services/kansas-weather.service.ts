import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { GenericService } from "src/app/app-generic.service";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  
  constructor(public http: HttpClient, private genericService: GenericService) {
  }
  
  getKansasWeather( ): Observable<any> {
    return (
      this.genericService
        .apiGet(
          `${environment.kansas_api}`,
        )
        .pipe(
          tap((response) => {
            return response;
          })
        )
    );
  }

  kansasHttp() {
    return this.http.get(environment.kansas_api)
  }
    
  getColumbiaWeather( ): Observable<any> {
    return (
      this.genericService
        .apiGet(
          `${environment.kansas_api}`,
        )
        .pipe(
          tap((response) => {
            return response;
          })
        )
    );
  }
}