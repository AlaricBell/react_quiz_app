import { render } from '@testing-library/react';

import ListItem from './ListItem'


describe("Check if lists are rendered", () => {
  it("checkListItemRender", () => {
    const {queryByText} = render(<ListItem>list item</ListItem>)
    const list = queryByText('list item')
    expect(list).toBeTruthy();
  })
})