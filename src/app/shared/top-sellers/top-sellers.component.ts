import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APIBase } from 'src/app/classes/APIBase';
import { ITopSellerProduct } from 'src/interfaces/products';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'super-top-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-sellers.component.html',
  styleUrls: ['./top-sellers.component.scss']
})
export class TopSellersComponent extends APIBase<ITopSellerProduct[]> {

    constructor(private _http: HttpClient){
      super("http://localhost:3000/top-sellers", _http);
    }

}
 