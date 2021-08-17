import { render, screen } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import {Provider} from 'react-redux'

import {store} from "./stateManager/store";

import Welcome from './components/Welcome'
import Score from './components/Score'
import Question from './components/Question'

describe("Check if pages are rendered", () => {
  it("checkWelcomePageRender", () => {
    render(<Router><Welcome/></Router>)
    const pageTitle = screen.queryByText("Welcome to the Trivia Challange")
    const pageText = screen.queryByText("You will be presented with 10 True or False questions")
    const pageButton = screen.queryAllByRole("button")

    expect(pageTitle).toBeTruthy();
    expect(pageText).toBeTruthy();
    expect(pageButton).toBeTruthy();
  })

  it("checkScorePageRender", () => {
    render(<Provider store={store}><Router><Score/></Router></Provider>)
    const pageTitle = screen.queryByText("Your Score")
    const pageLists = screen.queryAllByRole('li')
    const pageButton = screen.queryAllByRole("button")

    expect(pageTitle).toBeTruthy();
    expect(pageLists).toBeTruthy();
    expect(pageButton).toBeTruthy();
  })

  it("checkQuestionPageRender", () => {
    render(<Provider store={store}><Router><Question/></Router></Provider>)
    const pageButton = screen.queryAllByRole("button")

    expect(pageButton).toBeTruthy();
  })
})