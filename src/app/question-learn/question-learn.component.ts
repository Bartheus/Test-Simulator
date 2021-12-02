import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import {Question} from '../shared/question';

@Component({
  selector: 'app-question-learn',
  templateUrl: './question-learn.component.html',
  styleUrls: ['./question-learn.component.css']
})
export class QuestionLearnComponent implements OnInit {
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

isPrevButtonDisabled = false;
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
    }
  }

  showResult() {
    this.result = true;
  }

  toggleShow() {
    this.show = !this.show;
    if(this.show === false) {
      this.buttonText = 'Show Answer';
    } else {
      this.buttonText = 'Hide Answer';

    }
  }

  showAnswer() {
    let question = this.questions[this.currentQuestion];
    for (let answer of question.answers) {
      if (answer.correct === true ) {
        //add correct answer to array to show them all
        this.correctOptions.push(answer.option);
        this.description = question.description;
        if(this.correctOptions.length > 3 ) {
          this.correctOptions.pop();
        }
      }
    }
  }

  nextQuestion() {
    if(this.currentQuestion >= this.questions.length - 1 ) {
      this.isNextButtonDisabled = true;
    } else {
      this.currentQuestion++;
      this.show = false;
      if(this.show === false) {
        this.buttonText = 'Show Answer';
      } else {
        this.buttonText = 'Hide Answer';
      }
      this.selectedIndex = null ;
    }
    this.correctOptions = [];

  }

  previousQuestion() {
    if(this.currentQuestion <= 0 ) {
      this.isPrevButtonDisabled = true;
    } else {
      this.currentQuestion--;
      this.show = false;
      if(this.show === false) {
        this.buttonText = 'Show Answer';
      } else {
        this.buttonText = 'Hide Answer';
      }
      this.selectedIndex = null ;
    }
    this.correctOptions = [ ];

  }

}


