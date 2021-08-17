import { questionSeedBegan, questionSeed, questionAnswered, questionReset } from "./questions";
import {store} from "./store";
import axios from 'axios'
import {getQuestions} from '../lib/QuestionHandler'

describe("Check if question actions work correctly", () => {
  it("questionSeedBegan", () => {
    const result = questionSeedBegan({onSuccess: "questionSeed", onError: "questionSeedError", onReset: "questionReset"});
    const expected = {
      type: "questionSeedBegan",
      payload: {
        onSuccess: "questionSeed", 
        onError: "questionSeedError", 
        onReset: "questionReset"
      }}

    expect(result).toEqual(expected)
  })
})