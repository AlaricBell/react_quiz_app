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

export const getQuestionAt = async (index: number) => {
  try {
    const questions: response = await axios.get("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    return questions.data.results[index]
  } catch(error) {
    console.log(error)
  }

}