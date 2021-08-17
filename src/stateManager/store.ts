import { configureStore } from '@reduxjs/toolkit'
import reducer from './questions'

import {questionSeeder} from './middlewares'

const preloadedState = [{
  category: "Entertainment: Video Games",
  type: "boolean",
  difficulty: "hard",
  question: "Unturned originally started as a Roblox game.",
  correct_answer: "True",
  answered: "False"
  }]

export const store = configureStore({ 
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(questionSeeder),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch