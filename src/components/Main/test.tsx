import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render component
    const { container } = render(<Main />)

    // look to element and check existence
    expect(
      screen.getByRole('heading', { name: /boilerplate next/i })
    ).toBeInTheDocument()

    // generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
