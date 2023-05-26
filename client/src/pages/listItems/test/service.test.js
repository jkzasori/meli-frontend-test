import { meliHTTP } from 'services/api';
import { getItemSearch } from '../services/itemService';

// Simulamos una implementación "mock" de meliHTTP para simular la llamada a la API
jest.mock('services/api', () => ({
  meliHTTP: {
    get: jest.fn(),
  },
}));

describe('getItemSearch', () => {
  it('debería llamar a meliHTTP.get con la URL correcta', async () => {
    // Configuramos el comportamiento esperado del mock de meliHTTP.get
    const expectedQuery = 'test';
    const mockResponse = { data: 'test data' };
    const mockGet = jest.fn().mockResolvedValue(mockResponse);
    meliHTTP.get.mockImplementationOnce(mockGet);

    // Llamamos a la función getItemSearch con la consulta de prueba
    await getItemSearch(expectedQuery);

    // Verificamos que meliHTTP.get haya sido llamado con la URL correcta
    expect(meliHTTP.get).toHaveBeenCalledWith(`/api/items?q=${expectedQuery}`);
  });

  it('debería devolver los datos de respuesta correctamente', async () => {
    // Configuramos el comportamiento esperado del mock de meliHTTP.get
    const expectedQuery = 'test';
    const mockResponse = { data: 'test data' };
    const mockGet = jest.fn().mockResolvedValue(mockResponse);
    meliHTTP.get.mockImplementationOnce(mockGet);

    // Llamamos a la función getItemSearch con la consulta de prueba
    const result = await getItemSearch(expectedQuery);

    // Verificamos que la función getItemSearch devuelva los datos de respuesta correctamente
    expect(result).toEqual(mockResponse.data);
  });

  it('debería lanzar un error si la llamada a la API falla', async () => {
    // Configuramos el comportamiento esperado del mock de meliHTTP.get
    const expectedQuery = 'test';
    const mockError = new Error('API error');
    const mockGet = jest.fn().mockRejectedValue(mockError);
    meliHTTP.get.mockImplementationOnce(mockGet);

    // Verificamos que la función getItemSearch lance un error si la llamada a la API falla
    await expect(getItemSearch(expectedQuery)).rejects.toThrow(mockError);
  });
});
