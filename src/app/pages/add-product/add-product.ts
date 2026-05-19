import { Component } from '@angular/core';
import { ProductsService } from '../../services/products-service';
import { FormsModule, NgForm } from '@angular/forms';
import { IProduct } from '../../models/iproduct';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProduct {
  formData:Omit<IProduct , "_id" | "image"> = {
    name : '',
    price : 0 ,
    category : '' ,
    description : '',
  }
  selectedFile : File | null = null
    constructor(private _productsServices:ProductsService , private toast:ToastrService , private router:Router) {}

    onSelectedFile(event:any) {
      console.log(event);
      const file = event?.target?.files[0]
      if(file) {
        if(!file.type.startsWith("image/")) {
          this.toast.error("Only image allow")
          return;
        }
        this.selectedFile = file
      }

    }

    onSubmit(form:NgForm) {
      this._productsServices.addProduct(form.value,this.selectedFile)
      .subscribe({
        next : (res) => {
          this.toast.success("product add successfully")
          form.reset()
          console.log(res);
          // setTimeout(() => {
          //   this.router.navigateByUrl("/products")
          // },2000)
        },
        error : (err) => {
          console.log(err)
          this.toast.error(err.error.message,"Can't add Product")
        }
      })
    }
}
