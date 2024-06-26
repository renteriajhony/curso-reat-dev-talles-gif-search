import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas en useFetchGifs', () => {
  test('debe retornar el estado inicial del Hook ', () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'));
    // console.log(result);
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe retornar un arreglo de gifs y el isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs('One Punch Man'));

    await waitFor(() => expect(result.current.gifs.length).toBeGreaterThan(0));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
