import { Component, OnInit } from '@angular/core';
//import { DirectionService } from './../../services/direction.service';
//import { Observable } from 'rxjs';
import {AutoCompleteOptions} from 'ionic4-auto-complete';
import {SuggestService} from './../../services/suggest.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})


export class DirectionsPage implements OnInit {
  
  results: any = [];
  originString: string = null;
  destinationString: string = null;

  zonaOrigin : string = null;
  zonaIdOrigin : string = null;

  private loading: any;
  //private now = new Date().toISOString();
  private now = new Date();

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
  

  
  constructor(private http: HttpClient, 
    private router: Router, 
    private loadingController: LoadingController, 
    private suggestService: SuggestService,
    public alertController: AlertController) {
  }

  ngOnInit() { 

    
    this.dataString = this.getCurrDate();
    this.oraString = this.getCurrDate();
  }
  
  dataChanged() {
    this.oraString = this.dataString;

//    console.log(this.oraString);

  }

  getCurrDate() {

    var dateFormat = require('dateformat');
    let ret = "";

    var data = dateFormat(this.now, "yyyy-mm-dd"); 
    var ora = dateFormat(this.now, "HH:MM:ss.lo");
    ora = ora.replace(/00$/,":00")
    ret = data+"T"+ora;
  
    return ret;

  }




  runSearch() {


    if (this.originString != null && this.destinationString != null) {

      if (this.originString == 'Milano' && this.destinationString == 'Milano') {
        this.router.navigate(['/','directions','1urb_UrbanoMilano']);
      }
      else if (this.originString == this.destinationString){
        this.router.navigate(['/','directions',this.zonaOrigin+'_'+this.zonaIdOrigin]);
      } 
      else {

        //let datetime = this.dataString+"|"+this.oraString;
        let datetime = this.dataString;
        let urlRequest = `${this.url}get_directions_data?origin=${encodeURI(this.originString)}&destination=${encodeURI(this.destinationString)}&departure_time=${encodeURI(datetime)}`;
        urlRequest = urlRequest.replace("+", "PLUS");

        //console.log("URL: ", urlRequest);
        //return;
        this.presentLoading();
        this.http.get(urlRequest)
        .subscribe(res => {
          
          this.results = res;

          this.dismissLoading();
          if (this.results == null || this.results.length == 0){
            this.presentAlert();
          }
          
        },
        error => {
          setTimeout(() => {
            //alert("Errore");
            this.results = [];
            this.dismissLoading();
            this.presentAlert();
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
    this.zonaIdOrigin = item['zona_id'];
  }

  destinationSelected(item) {
    this.destinationString = item[this.suggestService.labelAttribute];
    this.zonaOrigin = item['zona'];
    this.zonaIdOrigin = item['zona_id'];
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
  
  
  
  mouseoverAgency(){
    console.log("mouse");
    
  }
  

  async presentAlert() {
    const alert = await this.alertController.create({
  
      header: 'Impossibile calcolare la tariffa',
          /*
      subHeader: 'risultati',
      */
      message: 'Dati non disponibili per l\'origine/destinazione selezionata ',
      buttons: ['OK']
    });

    await alert.present();
  }
}
