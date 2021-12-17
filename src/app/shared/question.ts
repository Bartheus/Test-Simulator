export interface Question {
  id: number,
  question: string,
  answers: {option: string, correct:boolean, selected: boolean}[],
  type: string
}

