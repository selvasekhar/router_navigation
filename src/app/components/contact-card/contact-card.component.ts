import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css']
})
export class ContactCardComponent implements OnInit {

  @Input() selectedContact : Contact ={} as Contact
  constructor() { }

  ngOnInit(): void {
  }

  isNotEmpty(){
    return Object.keys(this.selectedContact).length > 0
  }

}
