import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-card',
  imports: [RouterLink,CommonModule],
templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input()
  product!:any

  @Input()
  productDetails!:Boolean
}
