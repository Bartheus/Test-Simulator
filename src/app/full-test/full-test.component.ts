import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import {Question} from '../shared/question';

@Component({
  selector: 'app-full-test',
  templateUrl: './full-test.component.html',
  styleUrls: ['./full-test.component.css']
})
export class FullTestComponent implements OnInit {


  questions: Question[] = [];

currentQuestion = 0;
correctAnswers = 0;
incorrectAnswers = 0;
clickedAnswer = 0;
result = true;
selectedIndex:  any = null;
optionDisabled = false;
constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

  }

  onAnswer(e: Event, answer: any, index: number) {
    (e.target as Element).className = 'answered';
    this.clickedAnswer++;
    let question = this.questions[this.currentQuestion];
    for(let answer of question.answers) {
      if(answer.correct === true) {
        this.correctAnswers++;
          if(this.clickedAnswer >= 1) {
            this.optionDisabled = true;
          } else {
            this.optionDisabled =false ;
          }
      }else {
        this.incorrectAnswers++;
      }
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
  submitAnswer() {
      this.currentQuestion++;
      this.selectedIndex = null ;
      this.optionDisabled = false;
    }

}
