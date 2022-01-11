import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import {Question} from '../shared/question';

@Component({
  selector: 'app-partial-test',
  templateUrl: './partial-test.component.html',
  styleUrls: ['./partial-test.component.css']
})
export class PartialTestComponent implements OnInit {


  questions: Question[] = [];

currentQuestion = 0;
answerSelected = false;
correctAnswers = 0;
incorrectAnswers = 0;
buttonText = "Show Hint";
show = false;
correctOptions: string[] = [];
description = '';
answerCheckText = '';
result = true;
colorClass = 'normal';
selectedIndex:  any = null;
wrongText = '';
isNextButtonDisabled = false;
optionDisabled = false;
constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

  }

  onAnswer(e: Event, answer: any, index: number) {
    if (answer.correct) {
      (e.target as Element).className = 'correct';
      this.optionDisabled = true;
      this.correctAnswers++;
    } else {
      (e.target as Element).className = 'incorrect';
      this.wrongText = (e.target as Element).innerHTML = 'You need to practic more!';
      this.optionDisabled = true;
      this.incorrectAnswers++;
    }
  }

  restartQuiz(){
    this.currentQuestion = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    window.location.reload();
    // CHANGE THE STYLE OF THE <li> ELEMENTS AFTER RESTART BUTTON ON FIRST QUESTION
    // let lis = document.getElementsByClassName(".li")[0] as HTMLElement;
    // lis.setAttribute('class', 'normal');

  }

 // function on button to navigate to next question
  nextQuestion() {
    if(this.currentQuestion >= this.questions.length - 1) {
      this.isNextButtonDisabled = true;
    } else {
      this.currentQuestion++;
      this.selectedIndex = null ;
      this.isNextButtonDisabled = false;
      this.optionDisabled = false;
    }
  }
}
