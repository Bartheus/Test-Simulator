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



correctOption = '';

description = '';

result = false;

constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

  }



  onAnswer(option: boolean) {
    this.answerSelected = true;
    setTimeout(() => {
      this.currentQuestion++;
      this.answerSelected = false;
    }, 2000);

    if(option) {
      this.correctAnswers++;
    } else {
      this.incorrectAnswers++;
    }

  }

  showResult() {
    this.result = true;
  }


  showAnswer() {
    const question = this.questions[this.currentQuestion];
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
    }
  }

  previousQuestion() {
    if(this.currentQuestion <= 0 ) {
      console.log("exceeded the maximum number");
    } else {
      this.currentQuestion--;
    }
  }

}


