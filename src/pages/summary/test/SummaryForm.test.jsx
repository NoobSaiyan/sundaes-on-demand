import { render, screen } from '@testing-library/react'
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
