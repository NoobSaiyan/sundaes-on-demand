import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SummaryForm from '../SummaryForm'

test('button is enabled on selecting check box', () => {
  render(<SummaryForm />)

  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  })
  expect(confirmButton).toBeDisabled()

  const checkBox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  })
  expect(checkBox).not.toBeChecked()

  // click check checkbox
  userEvent.click(checkBox)
  expect(confirmButton).toBeEnabled()

  // click check checkbox
  userEvent.click(checkBox)
  expect(confirmButton).toBeDisabled()
})

test('popover responds to hover', async () => {
  render(<SummaryForm />)

  // popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i,
  )
  expect(nullPopover).not.toBeInTheDocument()

  // popover appearsupon mouseover of the checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i)
  userEvent.hover(termsAndConditions)

  const popover = screen.getByText(/no ice cream will actually be delivered/i)
  expect(popover).toBeInTheDocument()

  // popover disappears when we mouse out
  userEvent.unhover(termsAndConditions)
  await waitForElementToBeRemoved(() =>
    screen.queryByText(/no ice cream will actually be delivered/i),
  )
})
