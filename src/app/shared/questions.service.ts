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
      type: 'singleChoice'
    },
    {
      id: 4,
      question: "What is the default working directory of the Linux administrator user?",
      answers: [
        {option: "/administrator", correct:false},
        {option: "/root", correct:true},
        {option: "/usr/admin", correct:false},
        {option: "/admin", correct:false},
      ],
      type:"singleChoice"
    },
    {
      id: 5,
      question: "Which arithmetic operator you can not use?",
      answers: [
        {option: "+", correct:false},
        {option: "-", correct:false},
        {option: "*", correct:false},
        {option: "\\\\", correct:true},
      ],
      type:"singleChoice"
    },
    {
      id: 6,
      question: "What is the most common procedure for compiling programs under Linux?",
      answers: [
        {option: "compile file_name", correct:false},
        {option: "make file_name", correct:false},
        {option: "./configure && make && make install", correct:true},
        {option: "gcc file_name", correct:false},
      ],
      type:"singleChoice"
    },
    {
      id: 7,
      question: "Which command can be used to display basic information about your server?",
      answers: [
        {option: "info", correct:false},
        {option: "ls", correct:false},
        {option: "uname", correct:true},
        {option: "show", correct:false},
      ],
      type:"singleChoice"
    },
    {
      id: 8,
      question: "How can you display the top 10 number of lines of a file?",
      answers: [
        {option: "head −n 10 file.txt", correct:true},
        {option: "head -show 10 file.txt", correct:false},
        {option: "head --display-only 10 file.txt", correct:false},
        {option: "head -f 10 file.txt", correct:false},
      ],
      type:"singleChoice"
    },
    {
      id: 9,
      question: "How do you write the contents of 3 files into a single file?",
      answers: [
        {option:"cat file1 file2 file3 > file", correct: true},
        {option:"cat file1 > file && cat file2 >> file && cat file3 >> file", correct: true},
        {option:"cat file1 >> file; cat file2 >> file; cat file3 >> file", correct: true},
        {option:"cat file1 > file; cat file2 > file; cat file3 > file", correct: false},
      ],
      type: 'multipleChoice'
    },
    {
      id: 10,
      question: "Which command is used to copy file across different system?",
      answers: [
        {option: "rcp", correct:false},
        {option: "scp", correct:true},
        {option: "rsync", correct:true},
        {option: "mcp", correct:false},
      ],
      type:"multipleChoice"
    },
    {
      id: 11,
      question: "What is a Binary file?",
      answers: [
        {option: "Regular file", correct:true},
        {option: "Executable file", correct:true},
        {option: "Directory", correct:false},
        {option: "None of the above", correct:false},
      ],
      type:"multipleChoice"
    },
    {
      id: 12, //4
      question: "If we wish to mount a directory with Read Only option, which of the following is correct",
      answers: [
        {option:  "mount -t ext4 -o noexect,ro /path/to-dir /mnt/folder", correct:true},
        {option: "mount ext4 -no-read-only /path/to-dir /mnt/folder", correct:false},
        {option: "mount -t ext4 -o noexect,ro /mnt/folder /path/to-dir", correct:false},
        {option: "mount ext4 -no-read-only /mnt/folder /path/to-dir", correct:true},
      ],
      type:"multipleChoice"
    },
    {
      id: 13,
      question: "Which are the three looping constructs provided by shell?",
      answers: [
        {option:  "while", correct:true},
        {option: "for", correct:true},
        {option: "until", correct:false},
        {option: "done", correct:true},
      ],
      type:"multipleChoice"
    },
    {
      id: 14,
      question: "If we wish to mount a directory with Read Only option, which of the following is correct?",
      answers: [
        {option:  "mount -t ext4 -o noexect,ro /path/to-dir /mnt/folder", correct:true},
        {option: "mount -t ext4 -o noexect,ro /mnt/folder /path/to-dir", correct:false},
        {option: "mount ext4 -no-read-only /path/to-dir /mnt/folder", correct:false},
        {option: "mount ext4 -no-read-only /mnt/folder /path/to-dir", correct:true},
      ],
      type:"multipleChoice"
    },
    {
      id: 15,
      question: "If you see a directory with the following permissions `drwxrwxrxt`, would you be able to remove it?",
      answers: [
        {option:  "Only the owner of the folder can remove this folder", correct:true},
        {option: "Yes, we can remove it from any user", correct:false},
        {option: "No, this folder can't be remove.", correct:false},
        {option: "We can remove it with the root user", correct:true},
      ],
      type:"multipleChoice"
    },
    {
      id: 16,
      question: "What are the basic elements of components of Linux?",
      answers: [
        {option:  "Hardware", correct:true},
        {option: "Frames", correct:false},
        {option: "Shell", correct:true},
        {option: "Icons", correct:false},
      ],
      type:"multipleChoice"
    },
    {
      id: 17,
      question: "How to delete a directory in Linux?",
      answers: [
        {option: "rmdir", correct: true},
      ],
      type: "textarea"
    },
    {
      id: 18,
      question: "What command is used to clear up the command prompt wind?",
      answers: [
        {option: "clear", correct: true},
      ],
      type: "textarea"
    },
    {
      id: 19,
      question: "Which command can be used to count characters in a text file?",
      answers: [
        {option: "fsize", correct: true},
      ],
      type: "textarea"
    },
    {
      id: 20,
      question: "Which command can be used to execute a command/s repeatedly for the given schedule?",
      answers: [
        {option: "crontab", correct: true},
      ],
      type: "textarea"
    },
    {
      id: 21,
      question: "Which command can be used to rename a file/directory?",
      answers: [
        {option: "mv", correct: true},
      ],
      type: "textarea"
    },
    {
      id: 22,
      question: "Which command let you view current jobs being handled by Shell?",
      answers: [
        {option: "jobs", correct: true},
      ],
      type: "textarea"
    },
    {
      id: 23,
      question: "How do we change permissions on files?",
      answers: [
        {option: "chmod", correct: true},
      ],
      type: "textarea"
    },
    {
      id: 24,
      question: "Which command can give first found difference between two file after comparing?",
      answers: [
        {option: "cmp", correct: true},
      ],
      type: "textarea"
    },
  ]

  constructor() { }

  getQuestions() {
    return this.questions;
  }


}
