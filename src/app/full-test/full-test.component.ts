import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import {Question} from '../shared/question';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-full-test',
  templateUrl: './full-test.component.html',
  styleUrls: ['./full-test.component.css']
})
export class FullTestComponent implements OnInit {


  questions: Question[] = [];
answersArray: any = [];
currentQuestion = 0;
correctAnswers = 0;
incorrectAnswers = 0;
clickedAnswer = 0;
result = 0 ;
isUnchecked = true;
selectedIndex: 0;
optionDisabled = false;
points = 0;
toggle = false;
totalPoints = 0;
checked = false;
constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    console.log(this.questions);
  }

  onAnswer(option: any, event: any) {
    switch(this.questions[this.currentQuestion].type) {
              case "singleChoice": {
                  if(option.correct) {
                    this.correctAnswers++;
                    this.incorrectAnswers--;
                    this.result ++;
                  }
                  else {
                    this.incorrectAnswers++;
                    if(this.correctAnswers > 0) {
                      this.correctAnswers--;
                    }
                    if(this.incorrectAnswers > 1) {
                      this.incorrectAnswers = 1;
                    }
                    if(this.result > 0) {
                      this.result--;
                    }
                  }
              }
              break;
              case "multipleChoice": {
              }
              break;
              case "textarea": {
                if(option.correct) {
                  this.correctAnswers++;
                  this.incorrectAnswers--;
                  this.result ++;
                }
                else {
                  this.incorrectAnswers++;
                  if(this.correctAnswers > 0) {
                    this.correctAnswers--;
                  }
                  if(this.incorrectAnswers > 1) {
                    this.incorrectAnswers = 1;
                  }
                  if(this.result > 0) {
                    this.result--;
                  }
                }
              }

    }
  }

  restartQuiz(){
    this.currentQuestion = 0;
    this.correctAnswers = 0;
    this.incorrectAnswers = 0;
    window.location.reload();
  }

  submitAnswer() {
    let question = this.questions[this.currentQuestion];
    if(question.type === "textarea") {
      for (let answer of question.answers)
      if(answer.option === "rmdir") {
          this.points +=10;
        } else {
          if(this.points > 0) {
            this.points -=10
          }
        }
      }
      this.currentQuestion++;
      this.selectedIndex = 0;
      this.optionDisabled = false;
  }

}
