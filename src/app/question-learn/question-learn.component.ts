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
      console.log(option);
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
}
