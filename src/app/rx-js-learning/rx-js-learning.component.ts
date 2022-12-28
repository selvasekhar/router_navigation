import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-rx-js-learning',
  templateUrl: './rx-js-learning.component.html',
  styleUrls: ['./rx-js-learning.component.css']
})
export class RxJsLearningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 

  // this.agents = new Observable(
  //   function(observer: any): void {
  //     try {
  //       observer.next('Ram');
  //       observer.next('selva');
  //       observer.next('sekar');
  //     }
  //     catch (e) {
  //       observer.error(e);
  //     }
    
  // })

  // this.agents.subscribe((data: any) =>{
  //   console.log(data);
  // })

}
}
