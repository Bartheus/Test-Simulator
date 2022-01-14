import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  AbstractControl,
} from '@angular/forms';

import { QuestionsService } from '../shared/questions.service';
import { Question } from '../shared/question';

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
  displayValue = '';
  loadResult = false;
  isDisabled = true;
  value = '';
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
    console.log(this.correctAnswersNumDesired);
  }
  onCheckboxChange(option: any, e: any, i: any) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;
      this.answersArray[i] = option;
      console.log(option);
      if(e.target.checked == option) {
        this.correctAnswersNumActual++;
      }  else {
        this.correctAnswersNumActual--;
      } //console.log('AKTUELL' + this.correctAnswersNumActual);

    if (!e.target.checked){
      let i: number = 0;
      checkArray.controls.forEach((item: AbstractControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    } else {}
    this.isDisabled = false;
}

  toggleSubmitButtonOnInput() {
    let val = (document.querySelector('#box') as HTMLInputElement).value
    if(val !== '') {
      this.isDisabled = false;
    }
  }

  getInputValue() {
    //get input value from Fill in Questions
    if(this.questions[this.currentQuestion].type === 'textarea'){
      let val = (document.querySelector('#box') as HTMLInputElement).value
      console.log(val);
    let options = this.questions[this.currentQuestion].answers;
    for(let corrOption of options) {
      if(val === corrOption.option) {
        this.correctAnswers++;
        this.isDisabled = false;
      } else {
        this.isDisabled = false;
        this.incorrectAnswers++;
      }
    }
    this.isDisabled = false;
  }
  }

  // FUNCTION TO SUBMIT A QUESTION FORM AFTER ANSWERING
  submitForm() {
    this.getInputValue()
    this.isDisabled = true;
    if(this.questions[this.currentQuestion].type !== 'textarea'){
      if(this.correctAnswersNumActual == this.correctAnswersNumDesired) {
        this.correctAnswers++;
      } else {
        this.incorrectAnswers++;
      }
    }
    if(this.currentQuestion < this.questions.length - 1) {
      this.currentQuestion++;
    } else {
      console.log("END");
      //REDIRECT TO RESULT COMPONENT
    }

    let answersCheck = this.questions[this.currentQuestion].answers;
    this.correctAnswersNumDesired = 0;
    this.correctAnswersNumActual = 0;
    for(let i=0; i<answersCheck.length; i++) {
      if(answersCheck[i].correct){
        this.correctAnswersNumDesired++;
      }
    }

  }

  loadResultFunc() {
    this.submitForm();
    this.loadResult = true;
  }

  restartQuiz(){
    this.currentQuestion = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    window.location.reload();
  }

}
