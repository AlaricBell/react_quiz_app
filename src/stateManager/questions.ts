import { createAction, createReducer, PayloadAction  } from "@reduxjs/toolkit"

interface Question {
  category: string,
  type: string,
  difficulty: string,
  question: string,
  answer: string,
  answered: string,
  counter: number
}

interface Questions {
  results: Array<Question>
}

interface QuestionSeedBegan {
  onSuccess: string,
  onError: string,
  onReset: string
}

// This way it will be compatible with more types
type Action = Question

/********************************************/
/***************** ACTIONS ******************/
/********************************************/
export const questionAnswered = createAction<Question>('questionAnswered')
export const questionSeedBegan = createAction<QuestionSeedBegan>('questionSeedBegan')
export const questionSeed = createAction<Array<Question>>('questionSeed')
export const questionSeedError = createAction<string>('questionSeedError')
export const questionReset = createAction<Object>('questionReset')

/********************************************/
/***************** REDUCER ******************/
/********************************************/
const initialState: Array<Question> = []

export default createReducer(initialState, {
  [questionAnswered.type]: (question: Array<Question>, action: PayloadAction<Action>) => {
    question[action.payload.counter].answered = action.payload.answered
  },
  [questionSeed.type]: (question: Array<Question>, action: PayloadAction<Questions>) => {
    question.push(
      ...action.payload.results
    )
  },
  [questionReset.type]: (question?: Array<Question>, action?: PayloadAction<Object>) => {
    return initialState
  },
})