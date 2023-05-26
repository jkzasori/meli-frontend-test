import { meliHTTP } from 'services/api';
import { getDetailItem } from '../services/detailService'; 

// Mock de la función meliHTTP.get
jest.mock('services/api', () => ({
  meliHTTP: {
    get: jest.fn(),
  },
}));

describe('getDetailItem', () => {
  it('debería obtener los detalles de un item correctamente', async () => {
    const mockResponse = { data: 'Detalles del item' };
    const mockId = '123';

    // Configuración del mock de meliHTTP.get
    meliHTTP.get.mockResolvedValueOnce(mockResponse);

    // Llamada a la función getDetailItem
    const result = await getDetailItem(mockId);

    // Verificar que meliHTTP.get haya sido llamado correctamente
    expect(meliHTTP.get).toHaveBeenCalledTimes(1);
    expect(meliHTTP.get).toHaveBeenCalledWith(`/api/items/${mockId}`);

    // Verificar que la función retorne los datos esperados
    expect(result).toEqual(mockResponse.data);
  });

  it('debería lanzar un error si meliHTTP.get falla', async () => {
    const mockError = new Error('Error en la solicitud');
    const mockId = '123';

    // Configuración del mock de meliHTTP.get para simular un error
    meliHTTP.get.mockRejectedValueOnce(mockError);

    // Llamada a la función getDetailItem y esperar que lance un error
    await expect(getDetailItem(mockId)).rejects.toThrow(mockError);

    // Verificar que meliHTTP.get haya sido llamado correctamente
    expect(meliHTTP.get).toHaveBeenCalledTimes(1);
    expect(meliHTTP.get).toHaveBeenCalledWith(`/api/items/${mockId}`);
  });
});
