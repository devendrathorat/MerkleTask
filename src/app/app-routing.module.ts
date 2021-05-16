import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StorelistComponent } from './storelist/storelist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StoredetailsComponent } from './storedetails/storedetails.component';


const routes: Routes = [{ path: '', redirectTo: '/storeList', pathMatch: 'full' },
{ path: 'storeList', component: StorelistComponent },

{ path: 'storeDetails/:id', component: StoredetailsComponent},

{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
