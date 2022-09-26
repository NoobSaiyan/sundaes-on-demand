import { render, screen } from '@testing-library/react'
import Options from '../Options'

test('displays an image foreach scoop from the server', () => {
  render(<Options optionType="scoops" />)

  const scoopImages = screen.getAllByRole('img', { name: /scoop$/i })
  expect(scoopImages).toHaveLength(2)

  const altText = scoopImages.map(element => element.alt)
  expect(altText).toEqual('Chocolate scoop', 'Vanilla scoop')
})
