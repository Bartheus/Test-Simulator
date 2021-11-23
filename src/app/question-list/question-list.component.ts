import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import {Question} from '../shared/question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
questions: Question[] = [];

currentQuestion = 0;

constructor(private questionService: QuestionsService) {}

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
  }

}
