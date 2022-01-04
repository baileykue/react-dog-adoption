import { client, checkError } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select();
  return checkError(response);
}
