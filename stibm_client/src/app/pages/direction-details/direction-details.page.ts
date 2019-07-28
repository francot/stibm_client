//import { DirectionService } from './../../services/direction.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-direction-details',
  templateUrl: './direction-details.page.html',
  styleUrls: ['./direction-details.page.scss'],
})
export class DirectionDetailsPage implements OnInit {  
  
  information = null;
  idSelected : any = null;


  

  private ticketInfo = {
    "1 (Urbano Milano)" : { 
      "ordinario" : { "ord" : "2,00" , "giorn" : "7,00" , "tregiorn" : "12,00" } , 
      "abbordinario" : { "sett" : "-" , "mensile" : "50,00" , "annuale" : "460,00" }, 
      "abbagevolato" : { "mensile" : "37,50" , "annuale" : "345,00" , "annualeisee" : "69,00" } 

    },

    "1" : { 
      "ordinario" : { "ord" : "2,00" , "giorn" : "7,00" , "tregiorn" : "12,00" } , 
      "abbordinario" : { "sett" : "17,00" , "mensile" : "50,00" , "annuale" : "460,00" }, 
      "abbagevolato" : { "mensile" : "37,50" , "annuale" : "345,00" , "annualeisee" : "69,00" } 
    } ,
    "2" : { "ordinario" : { "ord" : "2,40" , "giorn" : "8,40" , "tregiorn" : "14,50" } , "abbordinario" : { "sett" : "20,50" , "mensile" : "60,00" , "annuale" : "552,00" }, "abbagevolato" : { "mensile" : "45,00" , "annuale" : "414,00" , "annualeisee" : "83,00" } } ,
    "3" : { "ordinario" : { "ord" : "2,80" , "giorn" : "9,80" , "tregiorn" : "17,00" } , "abbordinario" : { "sett" : "24,00" , "mensile" : "70,00" , "annuale" : "644,00" }, "abbagevolato" : { "mensile" : "53,00" , "annuale" : "483,00" , "annualeisee" : "97,00" } } ,
    "4" : { "ordinario" : { "ord" : "3,20" , "giorn" : "11,00" , "tregiorn" : "19,00" } , "abbordinario" : { "sett" : "27,00" , "mensile" : "77,00" , "annuale" : "682,00" }, "abbagevolato" : { "mensile" : "58,00" , "annuale" : "512,00" , "annualeisee" : "102,00" } } ,
    "5" : { "ordinario" : { "ord" : "3,60" , "giorn" : "12,50" , "tregiorn" : "21,50" } , "abbordinario" : { "sett" : "30,50" , "mensile" : "82,00" , "annuale" : "712,00" }, "abbagevolato" : { "mensile" : "62,00" , "annuale" : "534,00" , "annualeisee" : "107,00" } } ,
    "6" : { "ordinario" : { "ord" : "4,00" , "giorn" : "14,00" , "tregiorn" : "24,00" } , "abbordinario" : { "sett" : "34,00" , "mensile" : "87,00" , "annuale" : "738,00" }, "abbagevolato" : { "mensile" : "65,00" , "annuale" : "554,00" , "annualeisee" : "111,00" } } ,
    "7" : { "ordinario" : { "ord" : "4,40" , "giorn" : "15,50" , "tregiorn" : "26,50" } , "abbordinario" : { "sett" : "37,50" , "mensile" : "87,00" , "annuale" : "761,00" }, "abbagevolato" : { "mensile" : "65,00" , "annuale" : "571,00" , "annualeisee" : "114,00" } } ,
    "8" : { "ordinario" : { "ord" : "1,60" , "giorn" : "5,60" , "tregiorn" : "9,60" } , "abbordinario" : { "sett" : "13,50" , "mensile" : "40,00" , "annuale" : "368,00" }, "abbagevolato" : { "mensile" : "30,00" , "annuale" : "276,00" , "annualeisee" : "55,00" } } ,
    "9" : { "ordinario" : { "ord" : "2,00" , "giorn" : "7,00" , "tregiorn" : "12,00" } , "abbordinario" : { "sett" : "17,00" , "mensile" : "50,00" , "annuale" : "460,00" }, "abbagevolato" : { "mensile" : "37,50" , "annuale" : "345,00" , "annualeisee" : "69,00" } } ,
    "10" : { "ordinario" : { "ord" : "2,40" , "giorn" : "8,40" , "tregiorn" : "14,50" } , "abbordinario" : { "sett" : "20,50" , "mensile" : "60,00" , "annuale" : "552,00" }, "abbagevolato" : { "mensile" : "45,00" , "annuale" : "414,00" , "annualeisee" : "83,00" } } ,
    "11" : { "ordinario" : { "ord" : "2,80" , "giorn" : "9,80" , "tregiorn" : "17,00" } , "abbordinario" : { "sett" : "24,00" , "mensile" : "70,00" , "annuale" : "644,00" }, "abbagevolato" : { "mensile" : "53,00" , "annuale" : "483,00" , "annualeisee" : "97,00" } } ,
    "12" : { "ordinario" : { "ord" : "3,20" , "giorn" : "11,00" , "tregiorn" : "19,00" } , "abbordinario" : { "sett" : "27,00" , "mensile" : "77,00" , "annuale" : "682,00" }, "abbagevolato" : { "mensile" : "58,00" , "annuale" : "512,00" , "annualeisee" : "102,00" } } ,
    "13" : { "ordinario" : { "ord" : "3,60" , "giorn" : "12,50" , "tregiorn" : "21,50" } , "abbordinario" : { "sett" : "30,50" , "mensile" : "82,00" , "annuale" : "712,00" }, "abbagevolato" : { "mensile" : "62,00" , "annuale" : "534,00" , "annualeisee" : "107,00" } } ,
    "14" : { "ordinario" : { "ord" : "1,60" , "giorn" : "5,60" , "tregiorn" : "9,60" } , "abbordinario" : { "sett" : "13,50" , "mensile" : "40,00" , "annuale" : "368,00" }, "abbagevolato" : { "mensile" : "30,00" , "annuale" : "276,00" , "annualeisee" : "55,00" } } ,
    "15" : { "ordinario" : { "ord" : "2,00" , "giorn" : "7,00" , "tregiorn" : "12,00" } , "abbordinario" : { "sett" : "17,00" , "mensile" : "50,00" , "annuale" : "460,00" }, "abbagevolato" : { "mensile" : "37,50" , "annuale" : "345,00" , "annualeisee" : "69,00" } } ,
    "16" : { "ordinario" : { "ord" : "2,40" , "giorn" : "8,40" , "tregiorn" : "14,50" } , "abbordinario" : { "sett" : "20,50" , "mensile" : "60,00" , "annuale" : "552,00" }, "abbagevolato" : { "mensile" : "45,00" , "annuale" : "414,00" , "annualeisee" : "83,00" } } ,
    "17" : { "ordinario" : { "ord" : "2,80" , "giorn" : "9,80" , "tregiorn" : "17,00" } , "abbordinario" : { "sett" : "24,00" , "mensile" : "70,00" , "annuale" : "644,00" }, "abbagevolato" : { "mensile" : "53,00" , "annuale" : "483,00" , "annualeisee" : "97,00" } } ,
    "18" : { "ordinario" : { "ord" : "3,20" , "giorn" : "11,00" , "tregiorn" : "19,00" } , "abbordinario" : { "sett" : "27,00" , "mensile" : "77,00" , "annuale" : "682,00" }, "abbagevolato" : { "mensile" : "58,00" , "annuale" : "512,00" , "annualeisee" : "102,00" } } ,
    "19" : { "ordinario" : { "ord" : "1,60" , "giorn" : "5,60" , "tregiorn" : "9,60" } , "abbordinario" : { "sett" : "13,50" , "mensile" : "40,00" , "annuale" : "368,00" }, "abbagevolato" : { "mensile" : "30,00" , "annuale" : "276,00" , "annualeisee" : "55,00" } } ,
    "20" : { "ordinario" : { "ord" : "2,00" , "giorn" : "7,00" , "tregiorn" : "12,00" } , "abbordinario" : { "sett" : "17,00" , "mensile" : "50,00" , "annuale" : "460,00" }, "abbagevolato" : { "mensile" : "37,50" , "annuale" : "345,00" , "annualeisee" : "69,00" } } ,
    "21" : { "ordinario" : { "ord" : "2,40" , "giorn" : "8,40" , "tregiorn" : "14,50" } , "abbordinario" : { "sett" : "20,50" , "mensile" : "60,00" , "annuale" : "552,00" }, "abbagevolato" : { "mensile" : "45,00" , "annuale" : "414,00" , "annualeisee" : "83,00" } } ,
    "22" : { "ordinario" : { "ord" : "2,80" , "giorn" : "9,80" , "tregiorn" : "17,00" } , "abbordinario" : { "sett" : "24,00" , "mensile" : "70,00" , "annuale" : "644,00" }, "abbagevolato" : { "mensile" : "53,00" , "annuale" : "483,00" , "annualeisee" : "97,00" } } ,
    "23" : { "ordinario" : { "ord" : "1,60" , "giorn" : "5,60" , "tregiorn" : "9,60" } , "abbordinario" : { "sett" : "13,50" , "mensile" : "40,00" , "annuale" : "368,00" }, "abbagevolato" : { "mensile" : "30,00" , "annuale" : "276,00" , "annualeisee" : "55,00" } } ,
    "24" : { "ordinario" : { "ord" : "2,00" , "giorn" : "7,00" , "tregiorn" : "12,00" } , "abbordinario" : { "sett" : "17,00" , "mensile" : "50,00" , "annuale" : "460,00" }, "abbagevolato" : { "mensile" : "37,50" , "annuale" : "345,00" , "annualeisee" : "69,00" } } ,
    "25" : { "ordinario" : { "ord" : "2,40" , "giorn" : "8,40" , "tregiorn" : "14,50" } , "abbordinario" : { "sett" : "20,50" , "mensile" : "60,00" , "annuale" : "552,00" }, "abbagevolato" : { "mensile" : "45,00" , "annuale" : "414,00" , "annualeisee" : "83,00" } } ,
    "26" : { "ordinario" : { "ord" : "1,60" , "giorn" : "5,60" , "tregiorn" : "9,60" } , "abbordinario" : { "sett" : "13,50" , "mensile" : "40,00" , "annuale" : "368,00" }, "abbagevolato" : { "mensile" : "30,00" , "annuale" : "276,00" , "annualeisee" : "55,00" } } ,
    "27" : { "ordinario" : { "ord" : "2,00" , "giorn" : "7,00" , "tregiorn" : "12,00" } , "abbordinario" : { "sett" : "17,00" , "mensile" : "50,00" , "annuale" : "460,00" }, "abbagevolato" : { "mensile" : "37,50" , "annuale" : "345,00" , "annualeisee" : "69,00" } } ,
    "28" : { "ordinario" : { "ord" : "1,60" , "giorn" : "5,60" , "tregiorn" : "9,60" } , "abbordinario" : { "sett" : "13,50" , "mensile" : "40,00" , "annuale" : "368,00" }, "abbagevolato" : { "mensile" : "30,00" , "annuale" : "276,00" , "annualeisee" : "55,00" } } 
    };

   /**
   * Constructor of our details page
   * @param activatedRoute Information about the route we are on
   */
  constructor (private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.idSelected = id;
    //alert("id: "+id);
    this.information = this.ticketInfo[id];

    
    /*
    // Get the information from the API
    this.movieService.getDetails(id).subscribe(result => {
      this.information = result;
    });*/
  }

}
