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
  press() {
    if ($(".toggle-menu i").attr("class") == "fa fa-align-justify") {
      $(".toggle-menu i").attr("class", "fa fa-align-justify fa-times");
      $(".header-nav").css("right", "240px");
      $(".nav-menu").addClass("openMenu");
      $(".nav-item li").css({ "opacity": "1", "padding-top": "25px" });
  }
    else {
      $(".toggle-menu i").attr("class", "fa fa-align-justify");
      $(".header-nav").css("right", "0px");
      $(".nav-menu").removeClass("openMenu");
      $(".nav-item li").css({ "opacity": "0", "padding-top": "500px" });
  }
  }
 /* press($event){
 
      $( '.second-nav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
      
      $('.second-nav .navbar-nav a' ).parent( 'li' ).addClass( 'active' );
   
    console.log($event);
  }*/
  ngOnInit() {
  }

}
