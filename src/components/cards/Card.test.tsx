import { render } from '@testing-library/react';

import CardQuestion from './CardQuestion'
import CardQuestionBody from './CardQuestionBody'


describe("Check if cards are rendered", () => {
  it("checkCardQuestionBodyRender", () => {
    const {queryByText} = render(<CardQuestionBody content={"Card Body"}/>)
    const card = queryByText('Card Body')
    expect(card).toBeTruthy();
  })

  it("checkCardQuestionRender", () => {
    const {queryByText} = render(<CardQuestion content="Card Question" current={1} top={10}></CardQuestion>)
    const card = queryByText('Card Question')
    const paginate = queryByText('1 of 10')
    expect(card).toBeTruthy();
    expect(card).toBeTruthy();
  })
})