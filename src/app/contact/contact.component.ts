import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // currentMessage:string;

  constructor(private notificationS:NotificationService) { }

  ngOnInit(): void {
    this.notificationS.notificationSubject.subscribe(d=>{

      // this.currentMessage=d;
    })

    
  }

  sendMessage(data: { value: string  }){

    this.notificationS.sendNotification(data.value);
  }

}
