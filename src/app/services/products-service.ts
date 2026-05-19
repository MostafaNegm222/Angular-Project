import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor (private _http:HttpClient) {}
  apiLink = `https://zealous-contentment-production-5f84.up.railway.app/products`
  getProducts(params:any={}) {
    return this._http.get(`${this.apiLink}`,{params})
  }
  getOneProduct (id:string) {
    return this._http.get(`${this.apiLink}/${id}`)
  }

  addProduct (product:Omit<IProduct , "_id" | "image">,file:File | null) {
    const formData = new FormData()
    Object.entries(product).forEach((obj:any) => {
      formData.append(obj[0],obj[1])
    })
    if(file) {
      formData.append("image",file)
    }
    return this._http.post(this.apiLink,formData)
  }

  updateProduct (id:string , product:Partial<IProduct>) {
    return this._http.patch(`${this.apiLink}/${id}`,product)
  }

  deleteProduct (id:string) {
    return this._http.delete(`${this.apiLink}/${id}`)
  }
}
