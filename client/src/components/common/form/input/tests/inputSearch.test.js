import { render, screen, fireEvent } from '@testing-library/react';
import { InputSearch } from '../';

describe('InputSearch component', () => {
  const onSearchMock = jest.fn();
  const handleSearchChangeMock = jest.fn();

  it('actualiza el valor de búsqueda cuando cambia el valor de entrada', () => {
    render(
      <InputSearch
        onSearch={onSearchMock}
        handleSearchChange={handleSearchChangeMock}
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Test Value' } });
    expect(inputElement.value).toBe('Test Value');
  });

  it('llama a handleSearchChange cuando cambia el valor de entrada', () => {
    render(
      <InputSearch
        onSearch={onSearchMock}
        handleSearchChange={handleSearchChangeMock}
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Test Value' } });
    expect(handleSearchChangeMock).toHaveBeenCalledWith('Test Value');
  });

  it('llama a onSearch cuando se presiona la tecla Enter', () => {
    render(
      <InputSearch
        onSearch={onSearchMock}
        handleSearchChange={handleSearchChangeMock}
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' });
    expect(onSearchMock).toHaveBeenCalledTimes(1);
    expect(onSearchMock).toHaveBeenCalledWith('');
  });

  it('llama a handleSearchChange y onSearch cuando se hace clic en el botón de búsqueda', () => {
    render(
      <InputSearch
        onSearch={onSearchMock}
        handleSearchChange={handleSearchChangeMock}
      />
    );

    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Test Value' } });

    const searchButton = screen.getByRole('button');
    fireEvent.click(searchButton);

    expect(handleSearchChangeMock).toHaveBeenCalledWith('Test Value');
    expect(onSearchMock).toHaveBeenCalledWith('Test Value');
  });
});
