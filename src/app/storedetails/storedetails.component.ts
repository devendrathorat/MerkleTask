import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-storedetails',
  templateUrl: './storedetails.component.html',
  styleUrls: ['./storedetails.component.css']
})
export class StoredetailsComponent implements OnInit {


  id;
  productDetails: { id: number; storeName: string; storeAdress: string; storeTiming: string; Offer: string; storeImg: string; storeDesc: string; };
  
  constructor( private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _productService:StoreService) { }

  ngOnInit() {

    this.id=this._Activatedroute.snapshot.params['id'];
   
    let products=this._productService.getStore();
   
    this.productDetails=products.find(p => p.id==this.id);
  }

 
}
