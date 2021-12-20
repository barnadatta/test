import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private httpClient:HttpClient) { }

  getContact(): Observable<any>{

    return this.httpClient.get("http://localhost:3000/posts");

    // const contactList=[
    //   {contactId:1,contactName:"abc"},
    //   {contactId:2,contactName:"efg"},
    //   {contactId:3,contactName:"ijk"}
    
    // ];

    // return contactList;
  }
}
