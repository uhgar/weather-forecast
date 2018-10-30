import { Directive,ElementRef, OnInit } from '@angular/core';
declare var google;



@Directive({
  selector: '[google-place]'
})
export class GooglePlacesDirective implements OnInit {

  private element:HTMLInputElement;
   
  constructor(private e1ref:ElementRef) {
        this.element = e1ref.nativeElement    
   }

   ngOnInit(){
     const autocomplete = new google.maps.places.Autocomplete(this.element)
   }

}
