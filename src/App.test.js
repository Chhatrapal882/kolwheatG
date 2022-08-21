import { getByTestId, render, screen } from '@testing-library/react';
import App from './App';
import { formatUserName } from './utils';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe('App', ()=> {
  it('to be the freta', () => {
    render(<App/>)
    const txtf = screen.getByText('to be the freta')
    expect(txtf).toBeInTheDocument()
  })
    it('username with @', () => {
    render(<App/>)
    expect(formatUserName('gc')).toBe('@gc')
  })
  it('id', () => {
    render(<App/>)
    expect(screen.getByTestId('para-id')).toBeInTheDocument()
  })

})

