import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from '../';

describe('Input component', () => {
  const onChangeMock = jest.fn();

  it('renders el label', () => {
    render(
      <Input
        label="Test Label"
        value="Test Value"
        onChange={onChangeMock}
        placeholder="Test Placeholder"
      />
    );

    const labelElement = screen.getByText('Test Label');
    expect(labelElement).toBeInTheDocument();
  });

  it('render el input con el value y placeholder correcto', () => {
    render(
      <Input
        label="Test Label"
        value="Test Value"
        onChange={onChangeMock}
        placeholder="Test Placeholder"
      />
    );

    const inputElement = screen.getByRole('textbox');
    expect(inputElement.value).toBe('Test Value');
    expect(inputElement.placeholder).toBe('Test Placeholder');
  });

  it('Llama onChange handler cuando el valor del input cambia', () => {
    render(
      <Input
      label="Test Label"
      value="Test Value"
      onChange={onChangeMock}
      placeholder="Test Placeholder"
    />
  );

  const inputElement = screen.getByRole('textbox');
  fireEvent.change(inputElement, { target: { value: 'New Value' } });

  expect(onChangeMock).toHaveBeenCalledWith('New Value');
  });
});
