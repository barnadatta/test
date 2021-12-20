import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor(private contactsService:ContactsService) { }

  // contactList:object=[];
  contactList:any=[];
  ngOnInit(): any {

    // this.contactList=this.contactsService.getContact();

    this.contactsService.getContact().subscribe((data:any)=>{ //(data: object)

      this.contactList=data;

    })

  }

}
