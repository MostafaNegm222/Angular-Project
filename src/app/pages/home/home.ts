import { Component } from '@angular/core';

import { Counter } from "../../components/counter/counter";

@Component({
  selector: 'app-home',
  imports: [ Counter],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
