import { render } from '@testing-library/react';

import PaginationCounter from './PaginationCounter'


describe("Check if paginations are rendered", () => {
  it("checkPaginationMinRender", () => {
    const {queryByText} = render(<PaginationCounter current={1} top={10}/>)
    const pagination = queryByText('1 of 10')

    expect(pagination).toBeTruthy();
  })

  it("checkPaginationMaxRender", () => {
    const {queryByText} = render(<PaginationCounter current={10} top={10}/>)
    const pagination = queryByText('10 of 10')

    expect(pagination).toBeTruthy();
  })
})