import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionLearnComponent } from './question-learn.component';

describe('QuestionListComponent', () => {
  let component: QuestionLearnComponent;
  let fixture: ComponentFixture<QuestionLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
