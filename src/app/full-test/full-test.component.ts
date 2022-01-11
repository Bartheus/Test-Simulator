import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  AbstractControl,
} from '@angular/forms';

import { QuestionsService } from '../shared/questions.service';
import { Question } from '../shared/question';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-full-test',
  templateUrl: './full-test.component.html',
  styleUrls: ['./full-test.component.css'],
})
export class FullTestComponent implements OnInit {
  form: FormGroup;
  questions: Question[] = [];
  currentQuestion = 0;
  answersArray: boolean[] = [];
  correctAnswers = 0;
  incorrectAnswers = 0;
  correctAnswersNumActual  = 0;
  correctAnswersNumDesired = 0;

  constructor(
    private questionService: QuestionsService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    let answersCheck = this.questions[this.currentQuestion].answers;
    this.correctAnswersNumDesired = 0;
    this.correctAnswersNumActual = 0;

    for(let i=0; i<answersCheck.length; i++) {
      if(answersCheck[i].correct){
        this.correctAnswersNumDesired++;
      }
    }
    console.log('ADASDASD ' + this.correctAnswersNumDesired);
  }
  onCheckboxChange(option: any, e: any, i: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

      // checkArray.push(new FormControl(option));
      this.answersArray[i] = option;
      console.log(option);
      if(e.target.checked == option) {
        this.correctAnswersNumActual++;
      }  else {
        this.correctAnswersNumActual--;
      } console.log('AKTUELL' + this.correctAnswersNumActual);

    if (!e.target.checked){

      let i: number = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
}

  submitForm() {
    if(this.correctAnswersNumActual == this.correctAnswersNumDesired) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }
    this.currentQuestion++;
    this.correctAnswersNumDesired = 0;
    this.correctAnswersNumActual = 0;
    let answersCheck = this.questions[this.currentQuestion].answers;
    for(let i=0; i<answersCheck.length; i++) {
      if(answersCheck[i].correct){
        this.correctAnswersNumDesired++;
      }
    }
    console.log('ADASDASD ' + this.correctAnswersNumDesired);
  }

}
