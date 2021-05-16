import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-storelist',
  templateUrl: './storelist.component.html',
  styleUrls: ['./storelist.component.css']
})
export class StorelistComponent implements OnInit {


  constructor(private _storeList:StoreService) { }

  storeData = [];
  
  ngOnInit() {
  
      this.storeData = this._storeList.getStore();
  
      console.log(this.storeData);
  }

}
