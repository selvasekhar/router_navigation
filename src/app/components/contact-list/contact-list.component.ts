import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
@Output() sendContact = new EventEmitter();
  public contacts: Contact[] = [] as Contact[];
  public errormessage: string | undefined;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
    }, (error) => {
      console.log(error);;
      this.errormessage = error
    });
  }

  selectContact(contact:Contact){
    this.sendContact.emit(contact)
  }
}
