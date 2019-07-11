import { Component, OnInit } from '@angular/core';
import { DirectionService } from './../../services/direction.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.page.html',
  styleUrls: ['./directions.page.scss'],
})


export class DirectionsPage implements OnInit {


   results: Observable<any>;
   originString: string = '';
   destinationString: string = '';


   /**
    * Constructor of our first page
    * @param directionService The direction Service to get data
    */
   constructor(private directionService: DirectionService) { }

   ngOnInit() { }

   runSearch() {
     console.log('run search');
     this.results = this.directionService.searchData(this.originString, this.destinationString, "now");

     console.log(this.results);
   }

   searchChanged() {
     // Call our service function which returns an Observable
     //this.results = this.directionService.searchData(this.searchTerm, this.type);
   }


}
