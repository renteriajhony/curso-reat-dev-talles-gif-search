import { render, screen, fireEvent } from '@testing-library/react';
import { AddCategory } from '../../src/components';

describe('Pruebas en <AddCategory/>', () => {
  const onAdd = jest.fn();

  test('debe hacer match con snapshop ', () => {
    const { container } = render(<AddCategory onAddCategory={onAdd} />);
    expect(container).toMatchSnapshot();
  });

  test('debe cambiar el valor de la caja de texto ', () => {
    render(<AddCategory onAddCategory={onAdd} />);
    const input = screen.getByPlaceholderText('Search gifs...');
    fireEvent.change(input, { target: { value: 'Goku' } });
    expect(input.value).toBe('Goku');
  });

  test('debe llamar onSubmit, si el input tiene un valor valido ', () => {
    const inputValue = 'Goku';
    render(<AddCategory onAddCategory={onAdd} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    fireEvent.submit(form);
    expect(input.value).toBe('');
    expect(onAdd).toHaveBeenCalled();
    expect(onAdd).toHaveBeenCalledWith(inputValue);
    expect(onAdd).toHaveBeenCalledTimes(1);
  });

  test('No dene llamar onSubmit si el input no tiene un valor valido ', () => {
    const inputValue = 'G';
    const onAdd2 = jest.fn();
    render(<AddCategory onAddCategory={onAdd} />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');
    fireEvent.change(input, { target: { value: inputValue } });
    expect(input.value).toBe(inputValue);
    fireEvent.submit(form);
    expect(onAdd2).not.toHaveBeenCalled();
    expect(onAdd2).toHaveBeenCalledTimes(0);
  });
});
