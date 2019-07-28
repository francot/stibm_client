import { Component, OnInit } from '@angular/core';
//import { DirectionService } from './../../services/direction.service';
//import { Observable } from 'rxjs';
import {AutoCompleteOptions} from 'ionic4-auto-complete';
import {SuggestService} from './../../services/suggest.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})


export class DirectionsPage implements OnInit {
  

  results: any = null;
  originString: string = null;
  destinationString: string = null;

  zonaOrigin : string = null;
  zonaDestination : string = null;

  private loading: any;
  private now = new Date().toISOString();

  dataString: string = "";
  oraString: string = "";

  public originOptions:AutoCompleteOptions = {
    autocomplete: 'on',
    placeholder: 'Comune di Partenza',
    type: 'search'
  };

  public destinationOptions:AutoCompleteOptions = {
    autocomplete: 'on',
    placeholder: 'Comune di Arrivo',
    type: 'search'
  };


  url = 'https://europe-west1-stibm-1561387563826.cloudfunctions.net/';
  //url = 'http://www.fantacb.com/data.php?';
  

  
  constructor(private http: HttpClient, private router: Router, private loadingController: LoadingController, private suggestService: SuggestService) {
  }

  ngOnInit() { 
    this.dataString = this.getCurrDate();
    this.oraString = this.getCurrDate();
  }
  
  dataChanged() {
    this.oraString = this.dataString;
  }

  getCurrDate() {

    return this.now;
    //return new Date().toISOString();

  }




  runSearch() {

    console.log(this.zonaOrigin, this.zonaDestination);

    if (this.originString != null && this.destinationString != null) {

      if (this.originString == 'Milano' && this.destinationString == 'Milano') {
        this.router.navigate(['/','directions','1 (Urbano Milano)']);
      }
      else if (this.originString == this.destinationString){
        this.router.navigate(['/','directions','8']);
      } 
      else {

        let datetime = this.dataString+"|"+this.oraString;
        let urlRequest = `${this.url}get_directions_data?origin=${encodeURI(this.originString)}&destination=${encodeURI(this.destinationString)}&departure_time=${encodeURI(datetime)}`;
    
        this.presentLoading();
        this.http.get(urlRequest)
        .subscribe(res => {
          this.results = res;
          this.dismissLoading();
        },
        error => {
          setTimeout(() => {
            //alert("Errore");
            this.results = null;
            this.dismissLoading();
          }, 1000);
        });
      }
    } 
  }
  
 

  getStyleRow(step) {

    /*
    if (i % 2 == 0) {
      return {'background-color':'red', 'color':'yellow'};
    } else {
      return {'background-color':'yellow', 'color':'red'};
    }*/

    return {};

    
  }
  


  getColorZone(colorZone) {

    /*
    if (i % 2 == 0) {
      return {'background-color':'red', 'color':'yellow'};
    } else {
      return {'background-color':'yellow', 'color':'red'};
    }*/

    return {'background-color':colorZone, 
    'margin': '2px', 
    'float':'right', 
    'width': '20px',
    'heigth': '20px'
  };

    
  }
  

  originSelected(item) {
    this.originString = item[this.suggestService.labelAttribute];
    this.zonaOrigin = item['zona'];
  }

  destinationSelected(item) {
    this.destinationString = item[this.suggestService.labelAttribute];
    this.zonaDestination = item['zona'];
  }
  


  private async presentLoading() {
    this.loading = await this.loadingController .create();
    this.loading.present();
  }

  private dismissLoading() {
    this.loading.dismiss();
  }

  agencyurlClicked(url: string) {
    window.open(url, '_system');
  }

}
