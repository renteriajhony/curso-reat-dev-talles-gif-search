import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components';

describe('Pruebas en <GifItem/>', () => {
  const title = 'Hola';
  const url = 'https://example.com/hola.jpg';

  test('debe hacer match con snapshop ', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe mostrar la imagen con el URL y el ALT indocado ', () => {
    render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });
  test('debe mostrar el titulo en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
