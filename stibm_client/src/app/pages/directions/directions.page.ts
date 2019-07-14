import { Component, OnInit } from '@angular/core';
import { DirectionService } from './../../services/direction.service';
import { Observable } from 'rxjs';
import {AutoCompleteOptions} from 'ionic4-auto-complete';
import {SuggestService} from './../../services/suggest.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})


export class DirectionsPage implements OnInit {
  
  results: Observable<any> = null;
  originString: string = null;
  destinationString: string = null;
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


  
  constructor(private router: Router, private loadingController: LoadingController, private suggestService: SuggestService, private directionService: DirectionService) {
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
    if (this.originString != null && this.destinationString != null) {

      if (this.originString == 'Milano' && this.destinationString == 'Milano') {
        this.router.navigate(['/','directions','3']);
      }
      else if (this.originString == this.destinationString){
        this.router.navigate(['/','directions','5']);
      } 
      else {

        let datetime = this.dataString+"|"+this.oraString;
        
        this.presentLoading();
        this.directionService.searchData(this.originString, this.destinationString, datetime).subscribe(result => {
          this.results = result;
          //console.log(this.results);
          this.dismissLoading();
        });
      }
      
    } 
    

  }
  
 

  getStyleRow(i) {

    if (i % 2 == 0) {
      return {'background-color':'red', 'color':'yellow'};
    } else {
      return {'background-color':'yellow', 'color':'red'};
    }

    
  }
  
  

  originSelected(item) {
    this.originString = item[this.suggestService.labelAttribute];
  }

  destinationSelected(item) {
    this.destinationString = item[this.suggestService.labelAttribute];
  }


  private async presentLoading() {
    this.loading = await this.loadingController .create();
    this.loading.present();
  }

  private dismissLoading() {
    this.loading.dismiss();
  }

}
