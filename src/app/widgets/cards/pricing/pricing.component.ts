import { Component, Input, OnInit } from '@angular/core';



export interface Pricing{
  icon?:string;
  title: string;
  description:  string;
  price: string;
  offer?: string;
  legend?: string;
  free:boolean;
  items:PricingItem[];
}
export interface PricingItem{
  title:string;
  included:boolean;
}

@Component({
  selector: 'app-pricing-card',
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingCardComponent implements OnInit{

  @Input()
  mode!:string;

  @Input()
  title!:string;

  @Input()
  icon!:string;

  @Input()
  free:boolean=false;

  @Input()
  items!:Pricing;

  

  

  constructor() {
   
  }
  
  
  ngOnInit(): void {
    
  }

  onSubmit() {
   
      console.log('buy');
  
  }

}
