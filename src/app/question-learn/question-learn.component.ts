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
selectedQuestion: Question;

isPrevButtonDisabled = false;
isNextButtonDisabled = false;

constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

  }

  onSelect(question: Question):void {
    this.selectedQuestion = question;
  }
}


