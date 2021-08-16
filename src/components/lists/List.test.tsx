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
    const {queryAllByRole} = render(<ListScore data={[{name="Not implemented yet"}]} />)
    const listItems = queryAllByRole('li')
    expect(listItems).toBeTruthy();
  })
})