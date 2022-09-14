import { fireEvent, render, screen } from '@testing-library/react'
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
  fireEvent.click(checkBox)
  expect(confirmButton).toBeEnabled()
})
