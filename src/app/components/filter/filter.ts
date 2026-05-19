import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter',
  imports: [FormsModule],
  templateUrl: './filter.html',
  styleUrl: './filter.css',
})
export class Filter {
  filter=""
  @Output()
  filterEvent = new EventEmitter<string>()
  changeFilter() {
    this.filterEvent.emit(this.filter)
  }
}
