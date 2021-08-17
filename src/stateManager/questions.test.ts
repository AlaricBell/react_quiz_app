import { questionSeedBegan, questionSeed, questionAnswered, questionReset } from "./questions";
import {store} from "./store";

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

  it("questionReset", () => {
    const result = questionReset({});
    const expected = {
      type: "questionReset",
      payload: {}
    }

    expect(result).toEqual(expected)
  })

  it("questionAnswered", () => {

    const data: Question = {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question: "Unturned originally started as a Roblox game.",
      answer: "True",
      answered: "True",
      counter: 0
    }

    const result = questionAnswered(data);
    const expected = {
      type: "questionAnswered",
      payload: {
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question: "Unturned originally started as a Roblox game.",
        answer: "True",
        answered: "True",
        counter: 0
      }
    }

    expect(result).toEqual(expected)
  })

  it("questionSeed", () => {

    const data: Question = {
      category: "Entertainment: Video Games",
      type: "boolean",
      difficulty: "hard",
      question: "Unturned originally started as a Roblox game.",
      answer: "True",
      answered: "True",
      counter: 0
    }

    const result = questionSeed([data]);
    const expected = {
      type: "questionSeed",
      payload: [{
        category: "Entertainment: Video Games",
        type: "boolean",
        difficulty: "hard",
        question: "Unturned originally started as a Roblox game.",
        answer: "True",
        answered: "True",
        counter: 0
      }]
    }

    expect(result).toEqual(expected)
  })
})
