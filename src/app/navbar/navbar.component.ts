import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { 
   /* $( ' .second-nav .navbar-nav a' ).on( 'click', function () {
      $( '.second-nav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      $( this ).parent('li').addClass( 'active' );
    });

    $( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
*/

  }

 /* press($event){
 
      $( '.second-nav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      
      $('.second-nav .navbar-nav a' ).parent( 'li' ).addClass( 'active' );
   
    console.log($event);
  }*/
  ngOnInit() {
  }

}
