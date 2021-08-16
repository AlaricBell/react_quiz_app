import { render, fireEvent } from '@testing-library/react';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import ButtonChoice from './ButtonChoice'
import ButtonSubmit from './ButtonSubmit'
import ButtonGroup from './ButtonGroup'


describe("Check if buttons are rendered", () => {
  it("checkButtonChoiceRender", () => {
    const {queryByRole} = render(<ButtonChoice color="#FFF" handleChoice={() => {}}>test</ButtonChoice>)
    const btn = queryByRole('button')
    expect(btn).toBeTruthy();
  })

  it("checkButtonSubmitRender", () => {
    const {queryByRole} = render(<Router><ButtonSubmit path="/" handleSubmit={() => {}}>submit</ButtonSubmit></Router>)
    const btn = queryByRole('button')
    expect(btn).toBeTruthy();
  })

  it("checkButtonGroupRender", () => {
    const {queryAllByRole} = render(<Router><ButtonGroup>
                                  <ButtonChoice color="#FFF" handleChoice={() => {}}>test1</ButtonChoice>
                                  <ButtonChoice color="#FFF" handleChoice={() => {}}>test2</ButtonChoice>
                                  <ButtonSubmit path="/" handleSubmit={() => {}}>submit1</ButtonSubmit>
                                  <ButtonSubmit path="/" handleSubmit={() => {}}>submit2</ButtonSubmit>
                                 </ButtonGroup></Router>)
    const btn = queryAllByRole('button')
    expect(btn).toBeTruthy();
  })
})

describe("Check if buttons are clicked", () => {
  it("onclickButtonSubmit", () => {
    let testData: string = "Not Clicked"
    const testAction = () => {testData = "Clicked"}

    const {queryByRole} = render(<ButtonChoice color="#FFF" handleChoice={testAction}>test</ButtonChoice>)
    const btn = queryByRole('button')
    expect(testData).toBe("Not Clicked")

    if(btn)
      fireEvent.click(btn)

    expect(testData).toBe("Clicked")
  })

  it("onclickButtonChoice", () => {
    let testData: string = "Not Clicked"
    const testAction = () => {testData = "Clicked"}

    const {queryByRole} = render(<Router><ButtonSubmit path="/" handleSubmit={testAction}>submit</ButtonSubmit></Router>)
    const btn = queryByRole('button')
    expect(testData).toBe("Not Clicked")
    
    if(btn)
      fireEvent.click(btn)

    expect(testData).toBe("Clicked")
  })
})