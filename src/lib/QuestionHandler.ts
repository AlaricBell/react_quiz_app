import axios from "axios"

type response = {
  data: Question,
}

interface Question {
  response_code: number,
  results: Array<Result>
}

interface Result {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  correct_answer: string,
  incorrect_answers: Array<string>
}

export const getQuestions = async () => {
    const questions: response = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    return questions.data
}