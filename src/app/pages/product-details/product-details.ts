import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { map, Observable } from 'rxjs';
import { IProduct } from '../../models/iproduct';
import { Card } from "../../components/card/card";
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { DeleteModel } from "../../components/delete-model/delete-model";

@Component({
  selector: 'app-product-details',
  imports: [Card, RouterLink, CurrencyPipe, DeleteModel],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
  id = ""
  product!:IProduct
  productDetails = true
  constructor(private route:ActivatedRoute , private _productService:ProductsService , private chd:ChangeDetectorRef) {}
  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get("id"));
    this.route.paramMap.subscribe({
      next : (data:any) => {
        this.id = data.params.id
        this._productService.getOneProduct(this.id).pipe(
          map((res:any) => res.data)
        ).subscribe({
          next: (data) => {
            this.product = data
            this.chd.detectChanges()
          }
        })
      }
    });
  }


}
