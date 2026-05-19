import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  counter = signal(0)
  doubleCount = computed(() => {
    return this.counter() * 2
  })
  increment () {
    this.counter.update(v => v +1)
  }
  decrement () {
    this.counter.update(v => v -1)
  }
}
