import { render, screen, fireEvent, queryAllByTitle } from '@testing-library/react';
import ButtonChoice from './ButtonChoice'
import ButtonSubmit from './ButtonSubmit'
import ButtonGroup from './ButtonGroup'

it("checkButtonChoiceRender", () => {
  const {queryByText} = render(<ButtonChoice color="#FFF" handleChoice={() => {}}>test</ButtonChoice>)
  const btn = queryByText('test')
  expect(btn).toBeTruthy();
})

it("checkButtonChoiceRender", () => {
  const {queryByText} = render(<ButtonSubmit>submit</ButtonSubmit>)
  const btn = queryByText('submit')
  expect(btn).toBeTruthy();
})