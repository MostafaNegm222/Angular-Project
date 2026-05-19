import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort',
  imports: [FormsModule],
  templateUrl: './sort.html',
  styleUrl: './sort.css',
})
export class Sort {
  sort = ""
  @Output()
  sortEvent = new EventEmitter<string>()
  changeSort () {
    this.sortEvent.emit(this.sort)
  }
}
