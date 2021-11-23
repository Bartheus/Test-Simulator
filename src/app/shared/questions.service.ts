import { Injectable } from '@angular/core';
import { Question } from '../shared/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

    questions: Question[] = [
    {
      id: 1,
      question: "How to delete a directory in Linux?",
      answers: [
        {option: "ls", correct: false},
        {option: "delete", correct: false},
        {option: "remove", correct: false},
        {option: "rmdir", correct: true}
      ]
    },
    {
      id: 2,
      question: "What type of a language is HTML?",
      answers: [
        {option: "Network Protocol", correct: false},
        {option: "Markup Language", correct: true},
        {option: "Scripting Language", correct: false},
        {option: "Programming Language", correct: false}
      ]
    },
  ]

  constructor() { }

  getQuestions() {
    return this.questions;
  }

}
