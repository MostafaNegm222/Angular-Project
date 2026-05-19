import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbPagination } from '@ng-bootstrap/ng-bootstrap/pagination';

@Component({
  selector: 'app-pagination',
  imports: [NgbPagination],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  page = 1;
  @Input()
  totalProduct!:number

  @Input()
  set currentPage (value:number) {
    this.page = value
  }

  @Output()
  pageEvent = new EventEmitter<number>()
  changePage(page:number) {
    this.pageEvent.emit(page)
  }
}
