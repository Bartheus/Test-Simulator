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
correctOption = '';
description = '';
answerCheckText = '';
result = false;
colorClass = 'normal';

constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

  }

onAnswer() {
    let question = this.questions[this.currentQuestion];
    for (let answer of question.answers) {
        if (answer.correct === true  ) {
          this.colorClass = 'correct';
        } else {
          this.colorClass = 'incorrect';
       }
    }
}


  // selectResponse() {
  //   this.answerSelected = true;
  // }

  // check(status: any) {
  //   if(status.correct){
  //     return 'correct';
  //   } else{
  //     return  'incorrect;'
  //   }

  // }

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
        this.correctOption = answer.option;
        this.description = question.description;
      }
    }
  }

  nextQuestion() {
    if(this.currentQuestion >= this.questions.length - 1 ) {
      console.log("exceeded the maximum number");
    } else {
      this.currentQuestion++;
      this.show = false;
      if(this.show === false) {
        this.buttonText = 'Show Answer';
      } else {
        this.buttonText = 'Hide Answer';
      }

    }
  }

  previousQuestion() {
    if(this.currentQuestion <= 0 ) {
      console.log("exceeded the maximum number");
    } else {
      this.currentQuestion--;
      this.show = false;
      if(this.show === false) {
        this.buttonText = 'Show Answer';
      } else {
        this.buttonText = 'Hide Answer';
      }
    }
  }

}


