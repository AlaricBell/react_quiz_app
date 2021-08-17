import { render } from '@testing-library/react';

import ListItem from './ListItem'
import ListScore from './ListScore'


describe("Check if lists are rendered", () => {
  it("checkListItemRender", () => {
    const {queryByText} = render(<ListItem>list item</ListItem>)
    const list = queryByText('list item')
    expect(list).toBeTruthy();
  })

  it("checkListScoreRender", () => {
    const {queryByText} = render(<ListScore data={[{question: "test1", answered: true}, {question: "test2", answered: false}]}/>)

    const list1 = queryByText('test1')
    const list2 = queryByText('test2')

    expect(list1).toBeTruthy();
    expect(list2).toBeTruthy();
  })
})