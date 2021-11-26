export interface Question {
  id: number,
  question: string,
  answers: {option: string, correct:boolean}[],
  description: string
}
