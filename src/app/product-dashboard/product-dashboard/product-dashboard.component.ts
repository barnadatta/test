import { Component, OnInit } from '@angular/core';
//import { resolve } from 'dns';
import {  BehaviorSubject, Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    const subject =new Subject();

    subject.subscribe(d=>console.log(`subject subscriber1:${d}`));

    subject.next(2020);

    subject.subscribe(d=>console.log(`subject subscriber2:${d}`));

    subject.next(3030);

    subject.subscribe(d=>console.log(`subject subscriber3:${d}`));

    subject.next(4040);


    const bSubject =new BehaviorSubject<number>(12);

    bSubject.subscribe(d=>console.log(`Behavior subject subscriber1:${d}`));

    bSubject.next(200);

    bSubject.subscribe(d=>console.log(`Behavior subject subscriber2:${d}`));

    bSubject.next(300);

    bSubject.subscribe(d=>console.log(`Behavior subject subscriber3:${d}`));


  //  const observable =new Observable(sub=>{

  //   setTimeout(()=>{

  //     sub.next("pbsrevable working...");
  //   },1000);
  //  })

  //  observable.subscribe(result=>console.log(result));


    // const observable=new Observable(obj=>obj.next(Math.random()));

    // observable.subscribe(d=>console.log(d));

    // observable.subscribe(d=>console.log(d));

    //subject
    // const subject=new Subject();

    // //subscriber1
    // subject.subscribe(d=>console.log(d));

    // //subscriber2
    // subject.subscribe(d=>console.log(d));

    // subject.next(Math.random());


    // //promise
    // const promise=new Promise(resolve=>{
    //   setTimeout(()=>{

    //     resolve('promise working...');
    //   },1000)

      
    // })

    // promise.then(result=>console.log(result));
    // //observable

    // const obsrevable =new Observable(subscribe=>{

    //   setTimeout(()=>{
    //     subscribe.next('observable working...');
    //   },1000);
    // });

    // observable.subscribe(result=>console.log(result));

  }

}
