import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../shared/questions.service';
import {Question} from '../shared/question';
import Swal from 'sweetalert2';

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
result = true;
colorClass = 'normal';
selectedIndex:  any = null;
wrongText = '';
optionDisabled = false;
showNextButton = true;
showRestartButton = false;
checkCorrectAnswer = false;
checkWrongAnswer = false;
constructor(private questionService: QuestionsService) { }

  ngOnInit(): void {
    this.questions = this.questionService.getQuestions();

  }

  onAnswer(e: Event, answer: any, index: number) {
    if (answer.correct) {
      (e.target as Element).className = 'correct';
      this.optionDisabled = true;
      this.correctAnswers++;
    } else {
      (e.target as Element).className = 'incorrect';
      this.wrongText = (e.target as Element).innerHTML = 'You need to practic more!';
      this.optionDisabled = true;
      this.incorrectAnswers++;
      this.checkWrongAnswer = true;
      // Swal.fire("Incorrect Answer", "You should go back to learn module.", "error");
      Swal.fire({
        title: "Incorrect answer!",
        text: "You should go back to learn module.",
        icon: "error",
        background : "#1A374D",
        color:"white",
      });
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
  nextQuestion() {
    if(this.currentQuestion >= this.questions.length-1) {
      this.showNextButton = false;
      this.showRestartButton = true;
    } else {
      this.currentQuestion++;
      this.selectedIndex = null ;
      this.optionDisabled = false;
      this.checkCorrectAnswer = false;
      this.checkWrongAnswer =false;
    }
  }

  onSubmit() {
    if(this.questions[this.currentQuestion].type === 'textarea'){
      const val = (document.querySelector('#box') as HTMLInputElement).value
    let options = this.questions[this.currentQuestion].answers;
    for(let corrOption of options) {
      if(val === corrOption.option) {
        this.checkCorrectAnswer = true;
        this.checkWrongAnswer =false;
      } else {
        this.checkWrongAnswer =true;
        this.checkCorrectAnswer = false;
      }
    }
  }
  }
}
