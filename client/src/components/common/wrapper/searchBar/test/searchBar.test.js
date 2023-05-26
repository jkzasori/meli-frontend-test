import { render, screen, fireEvent } from '@testing-library/react';
import { SearchBar } from '../';
import { useLocation, useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
  useLocation: jest.fn(),
}));

describe('SearchBar component', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({
      search: '',
    });
    useNavigate.mockClear();
  });

  it('Actualiza el estado del input cuando cambia', () => {
    render(<SearchBar />);

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(inputElement.value).toBe('New Value');
  });
  
  it('Inicializa el input con el valor de la consulta en la URL', () => {
    useLocation.mockReturnValue({
      search: '?search=Initial Value',
    });
    render(<SearchBar />);

    const inputElement = screen.getByRole('textbox');

    expect(inputElement.value).toBe('Initial Value');
  });
});
