import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test {
  // sub!:Subscription
  // ngOnDestroy(): void {
  //   this.sub.unsubscribe()
  // }
  // ngOnInit(): void {
  //   this.sub = this.observable.subscribe({
  //     next : (data) => console.log(data),
  //     error : (err) => console.log(err),
  //     complete : () => console.log("done")
  //   })
  // }
  // notify = ["task1" ,"task2" , "" , "task3"]
  // observable = new Observable((observe) => {
    // this.notify.forEach(notfi => {
    //   observe.next(notfi)
    //   if(notfi == "") observe.error("this is empty string")
    // })
    // let count = 0
    // setInterval(() => {
    //   observe.next(count)
    //   count++
    // },1000)
    // observe.complete()
  // })
}
