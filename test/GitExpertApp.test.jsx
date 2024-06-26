import { render, screen } from '@testing-library/react';
// import { fireEvent, render, screen } from '@testing-library/react';
import { GitExpertApp } from '../src/GitExpertApp';

describe('Pruebas en GitExpertApp', () => {
  const initialValue = 100;

  test('debe hacer match con snapshop ', () => {
    const { container } = render(<GitExpertApp value={initialValue} />);
    expect(container).toMatchSnapshot();
  });

  test('debe cambiar stado al ejecutar onAddCategory ', () => {
    render(<GitExpertApp value={initialValue} />);
    screen.debug();
  });
});
