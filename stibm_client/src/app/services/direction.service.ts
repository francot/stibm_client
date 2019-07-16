import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  //url = 'https://europe-west1-stibm-1561387563826.cloudfunctions.net/';
  url = 'http://www.fantacb.com/data.php?';
  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }

  /**
  * Get data from the OmdbApi
  * map the result to return only the results that we need
  *
  * @param {string} title Search Term
  * @param {string} origin
  * @param {string} destination
  * @param {string} dateTime
  * @returns Observable with the search results
  */
  searchData(origin: string, destination: string, dateTime: string = "now"): Observable<any> {
    let urlRequest = `${this.url}get_directions_data?origin=${encodeURI(origin)}&destination=${encodeURI(destination)}&datetime=${encodeURI(dateTime)}}`;

 //   let urlRequest = `${this.url}get_directions_data?origin=${encodeURI(origin)}&destination=${encodeURI(destination)}&datetime=${encodeURI(dateTime)}`;
    console.log("RUN REQUEST: " + urlRequest);
    return this.http.get(urlRequest);

    /*
        return this.http.get(`${this.url}get_directions_data?origin=${encodeURI(origin)}&destination=${encodeURI(destination)}&datetime=${encodeURI(dateTime)}`).pipe(
          map(results => results)
        );
        */
  }
  /**
  * Get the detailed information for an ID using the "i" parameter
  *
  * @param {string} id imdbID to retrieve information
  * @returns Observable with detailed information
  */
  getDetails(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full`);
  }
}
