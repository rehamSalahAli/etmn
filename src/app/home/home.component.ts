import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    //this.press("$event");
   }

  press($event){
  // document.addEventListener("click" , function($event){
     console.log( " xx :  " + $event.clientX);
     console.log( " yy :  " + $event.clientY)
 // });
  };
  ngOnInit() {
  }

}
