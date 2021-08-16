import { render } from '@testing-library/react';

import TextPrimary from './TextPrimary'
import TextTitle from './TextTitle'


describe("Check if texts are rendered", () => {
  it("checkTextTitleRender", () => {
    const {queryByText} = render(<TextTitle>Title</TextTitle>)
    const text = queryByText("Title")

    expect(text).toBeTruthy();
  })

  it("checkTextPrimaryRender", () => {
    const {queryByText} = render(<TextPrimary>Paragraph</TextPrimary>)
    const text = queryByText("Paragraph")

    expect(text).toBeTruthy();
  })
})