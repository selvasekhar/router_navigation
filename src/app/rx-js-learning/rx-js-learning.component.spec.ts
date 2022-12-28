import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsLearningComponent } from './rx-js-learning.component';

describe('RxJsLearningComponent', () => {
  let component: RxJsLearningComponent;
  let fixture: ComponentFixture<RxJsLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJsLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
