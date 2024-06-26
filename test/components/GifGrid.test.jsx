import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');
describe('Pruebas en <GifGrid/>', () => {
  const category = 'Goku';
  const isLoading = true;

  test('debe hacer match con snapshop ', () => {
    useFetchGifs.mockImplementation(() => ({
      gifs: [],
      isLoading: true,
    }));
    const { container } = render(<GifGrid category={category} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar le loading inicialmente', () => {
    useFetchGifs.mockImplementation(() => ({
      gifs: [],
      isLoading: true,
    }));

    render(<GifGrid category={category} />);
    expect(screen.getByText('Loading...')).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
  test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {
    useFetchGifs.mockImplementation(() => ({
      gifs: [
        { id: 'ABC', title: 'Goku', url: 'https://localhost/goku' },
        { id: 'DEF', title: 'Vegeta', url: 'https://localhost/vegeta' },
      ],
      isLoading: false,
    }));

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
