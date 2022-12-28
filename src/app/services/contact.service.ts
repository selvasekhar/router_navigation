import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
// import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

import { Observable, throwError } from 'rxjs';
import { catchError } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient: HttpClient) { }

  public getAllContacts():Observable<Contact[]>{
    let dataURL : string =`https://gist.githubusercontent.com/thenaveensaggam/fe5a67531d964f8c17fc92f0c70ced21/raw/f7c43379ec32421c871a57f832e314dd8e5d92f7/contacts.15.6.2021.json`;
    return this.httpClient.get<Contact[]>(dataURL).pipe();
  }


  private handleError(error: HttpErrorResponse) {
    let errormessage:string='';
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      
      errormessage ='An error occurred: ${error.error}';
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      // console.error(
      //   `Backend returned code ${error.status}, body was: `, error.error);
        errormessage = `Backend returned code ${error.status}, body was:  ${error.error}`;
    }
    // Return an observable with a user-facing error message.
    // return throwError(() => new Error(''));
    errormessage += '\nSomething bad happened; please try again later.';
    return throwError(errormessage);
  }
}
