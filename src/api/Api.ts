const BASE_URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1';

export const fetchProducts = async (signal: AbortSignal) => {
  const response = await fetch(`${BASE_URL}/products`, {
    signal: signal,
    method: 'GET'
  });
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await response.json();
  return data;
};