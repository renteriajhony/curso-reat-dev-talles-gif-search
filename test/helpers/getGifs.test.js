import { getGifs } from '../../src/helpers/getGifs';

describe('Pruebas en getGifs', () => {
  test('debe retornar un arreglo de gifs ', async () => {
    const gifs = await getGifs('Dragon Ball');
    //Que el arreglo tenga al menos un elemento, tamaño mayor a 0
    expect(gifs.length).toBeGreaterThan(0);
    //Que cada elemento sea un objeto con id, título y url
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
