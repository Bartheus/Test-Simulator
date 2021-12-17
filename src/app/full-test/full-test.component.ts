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

currentQuestion = 0;
correctAnswers = 0;
incorrectAnswers = 0;
clickedAnswer = 0;
result = true;
isUnchecked = true;
selectedIndex: 0;
optionDisabled = false;
points = 0;
toggle = false;
totalPoints = 0;
constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();
    console.log(this.questions);
  }

  checkIfChecked() {

  }


  onAnswer(option: any) {
    if(option.correct) {
      this.points+=10;
    } else {
      if(this.points > 0 ){
        this.points-=10;
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
      this.selectedIndex = 0;
      this.optionDisabled = false;
  }

}
