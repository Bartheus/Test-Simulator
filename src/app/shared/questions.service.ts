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
      ],
      description: "You can remove directory with 'rmdir' command in your Terminal.",
      type: "singleChoice"
    },
    {
      id: 2,
      question: "What type of a language is HTML?",
      answers: [
        {option: "Network Protocol", correct: false},
        {option: "Markup Language", correct: true},
        {option: "Scripting Language", correct: false},
        {option: "Programming Language", correct: false}
      ],
      description: "HTML is a Markup Language",
      type: 'singleChoice'
    },
    {
      id: 3,
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
        {option: "<js>", correct: false},
        {option: "<script>", correct: true},
        {option: "<javascript>", correct: false},
        {option: "<scripting>", correct: false}
      ],
      description: "To implement your JS code into HTML you need to use '<script>' tag.",
      type: 'singleChoice'
    },
    {
      id: 4,
      question: "How do you write the contents of 3 files into a single file?",
      answers: [
        {option:"cat file1 file2 file3 > file", correct: true },
        {option:"cat file1 > file && cat file2 >> file && cat file3 >> file", correct: true},
        {option:"cat file1 >> file; cat file2 >> file; cat file3 >> file", correct: true},
        {option:"cat file1 > file; cat file2 > file; cat file3 > file", correct: false},
      ],
      description: "There are many ways to do it",
      type: 'multipleChoice'
    },
    {
      id: 5,
      question: "How to delete a directory in Linux?",
      answers: [
        {option: "rmdir", correct: true},
      ],
      description: "You can remove directory with 'rmdir' command in your Terminal.",
      type: "textarea"
    },
  ]

  constructor() { }

  getQuestions() {
    return this.questions;
  }




}
