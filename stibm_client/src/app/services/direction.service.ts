import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DirectionService {
  url = 'https://europe-west1-stibm-1561387563826.cloudfunctions.net/';

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
  searchData(origin: string, destination: string, dateTime: string = ""): Observable<any> {


    //return this.http.get(`${this.url}?origin=${origin}&destination=${origin}&datetime=now`);

    console.log("searchData ",`${this.url}get_directions_data?origin=${encodeURI(origin)}&destination=${encodeURI(destination)}&datetime=${encodeURI(dateTime)}`);

/*
    return  this.http.get(this.url).map(directions  => {

      return  products.map((directions) =>  directions);

    })
    .catch((err)=>{
      console.error(err);
    });
*/

this.http.get(this.url)
                        .then(data => {
                            console.log(data);
                        })
                        .catch(error => {
                            console.log(error);

                        });
/*
    //var ret = this.http.get(`${this.url}get_directions_data?origin=${encodeURI(origin)}&destination=${encodeURI(destination)}&datetime=${encodeURI(dateTime)}`);
    this.http.get('http://www.fantacb.com').pipe(
      //console.log("pipe")
      map(results => results)
    );
    */
    /*
    ret.subscribe(data => {
      console.log('my data: ', data);
    })*/


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
