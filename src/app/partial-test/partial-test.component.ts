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
result = false;
colorClass = 'normal';
selectedIndex:  any = null;
wrongText = '';
isNextButtonDisabled = false;

constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

  }

  onAnswer(e: Event, answer: any, index: number) {

    if (answer.correct) {
      (e.target as Element).className = 'correct';
    } else {
      (e.target as Element).className = 'incorrect';
      this.wrongText = (e.target as Element).innerHTML = 'You need to practic more!';
    }
  }


  nextQuestion() {
    if(this.currentQuestion >= this.questions.length - 1) {
      this.isNextButtonDisabled = true;
    } else {
      this.currentQuestion++;
      this.selectedIndex = null ;
      this.isNextButtonDisabled = false;
    }
  }
}
