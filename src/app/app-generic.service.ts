import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class GenericService {
  constructor(private http: HttpClient) {}

  public apiGet<T>(endpoint: string, params: HttpParams = new HttpParams()) {
    const options = { params: {} };
    if (params) {
      options["params"] = params;
    }
    return this.http.get<T>(endpoint, options).pipe(tap((response) => console.log(`Get ` + endpoint)));
  }

  public genericPost<T>(
    endpoint: string,
    body: Object,
    params: HttpParams = new HttpParams(),
  ) {
    const options = { params: {} };
    if (params) {
      options["params"] = params;
    }
    return this.http.post<T>(endpoint, body, options).pipe(tap((response) => console.log(`Post ` + endpoint)));
  }

  public handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.error(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Change text with a new parameter*/
  public addParameter(text: string, parameter: string) {
    return text.replace("?", parameter);
  }

}
