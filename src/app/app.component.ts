import { Component,ViewChild } from '@angular/core';
import {Http} from '@angular/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'weather-forecast';



 


  erroron?:boolean=false;
  show?:boolean=false;
  posts?:any;
  location1?:any;
  constructor(private http:Http){

  }

clear(input){ 
   this.show=false;
   this.erroron=false;
   input.value='';
}


sendHTTP(input){
  
  if(input.value==''){
    this.show=false;
    
    
    return;
  }
  this.posts=null;
  this.location1=null;
  
  var city = input.value;
  var searchtext = "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'"
 this.http.get("https://query.yahooapis.com/v1/public/yql?q="+searchtext+"&format=json").subscribe(
   response=>{
     if(response.json().query.results == null){
          this.show=false;
           this.erroron=true;
           return;
           
     }
    this.erroron=false;
    this.show=true;
   // console.log("iii "+response.json().query.results)
     this.posts=response.json().query.results.channel.item.condition;
     this.location1=response.json().query.results.channel;
  
     
   },
   error=>{
     if(error.status==400){
      this.show=false;
      this.erroron=true;
      //alert("unexpected error occured")
     }


      
      
   } )
}

}
