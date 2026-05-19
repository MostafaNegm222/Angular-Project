import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../services/products-service';
import { map, pipe } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-product',
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.html',
  styleUrl: './update-product.css',
})
export class UpdateProduct implements OnInit {
  updateProduct!: FormGroup
  id = ""
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private _productService: ProductsService ,
    private toast:ToastrService ,
    private router:Router
  ) { }
  ngOnInit(): void {
    this.updateProduct = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(3)]],
      image: ['', [Validators.required, Validators.minLength(3)]],
      category: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
    })
    this.route.paramMap.subscribe({
      next: (res: any) => {
        this.id = res.params.id
        this._productService.getOneProduct(this.id).pipe(
          map((res: any) => res.data)
        ).subscribe({
          next: (res) => this.updateProduct.patchValue(res)
        })
      }
    })
  }

  checkInput(control: string) {
    return (this.updateProduct.get(control)?.errors && (this.updateProduct.get(control)?.touched || this.updateProduct.get(control)?.dirty))
  }

  onSubmit() {
    this._productService.updateProduct(this.id, this.updateProduct.value).subscribe({
      next: (res) => {
        this.toast.success("product updated successfully")
        this.router.navigateByUrl("/products")
      },
      error : (err) => {
        console.log(err);
        this.toast.error(err.error.message,"Can't update product")
      }
    })
  }

}
