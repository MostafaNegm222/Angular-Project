import { AfterContentChecked, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { Card } from "../../components/card/card";
import { IProduct } from '../../models/iproduct';
import { BehaviorSubject, debounceTime, map, retry, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { Filter } from "../../components/filter/filter";
import { Sort } from "../../components/sort/sort";
import { Search } from "../../components/search/search";
import { Pagination } from "../../components/pagination/pagination";

@Component({
  selector: 'app-products',
  imports: [Card, CommonModule, RouterLink, Filter, Sort, Search, Pagination],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnInit {
  products = signal<IProduct[]>([])
  totalProduct = 0
  query$ = new BehaviorSubject<any>({
  })
  constructor(private _productsServices:ProductsService ,private chd:ChangeDetectorRef) {}
  ngOnInit(): void {
    this.query$.pipe(
      debounceTime(500),
      switchMap((query) => this._productsServices.getProducts(query)),

    ).subscribe((res:any) => {
      this.products.set(res.data)
      this.totalProduct = res.productCount
      this.chd.detectChanges()
    })
  }

  get currentPage () {
    return this.query$.value.page
  }

  changeFilter(value:string) {
    if(value)
    this.query$.next({
      ...this.query$.value,
      category:value,
      page:1
    })
    else {
      const query = {...this.query$.value}
      delete query.category
      this.query$.next(query)
    }
  }

  changeSort(value:string) {
    this.query$.next({
      ...this.query$.value,
      sort:value,
      page:1
    })
  }

  changeSearch(value:string) {
    this.query$.next({
      ...this.query$.value,
      search:value,
      page:1
    })
  }

  changePage(value:number) {
    document.querySelector("app-search")?.scrollIntoView({behavior:"smooth"})
    this.query$.next({
      ...this.query$.value,
      page:value
    })
  }
}
