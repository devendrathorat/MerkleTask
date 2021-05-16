import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  storeList = [
    {
      id: 1,
      storeName: "Red Ballon",
      storeAdress: "Dubai",
      storeTiming: "10AM - 10PM",
      Offer: "10% Off",
      storeImg: "../../assets/images/store1.jpg",
      storeDesc: "All products are available in store with offer"
    },
    {
      id: 2,
      storeName: "First Cry",
      storeAdress: "Pune India",
      storeTiming: "8AM - 10PM",
      Offer: "30% Off",
      storeImg: "../../assets/images/store2.jpg",
      storeDesc: "Best unique products are available for baby"
    },
    {
      id: 3,
      storeName: "BabyBorn Toys",
      storeAdress: "London UK",
      storeTiming: "10AM - 10PM",
      Offer: "60% Off",
      storeImg: "../../assets/images/store3.jpg",
      storeDesc: "UK top branded toys are  availble with best quality"
    }, {
      id: 4,
      storeName: "John Toys",
      storeAdress: "I Tower UK",
      storeTiming: "10AM - 5PM",
      Offer: "20% Off",
      storeImg: "../../assets/images/store4.jpg",
      storeDesc: "Wrapp up offer for all toys with best quality"

    }]

  constructor() {


  }
  // store list 
  getStore() {

    console.log("serv-->", this.storeList);
    return this.storeList;
  }


}
