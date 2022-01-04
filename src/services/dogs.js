import { client, checkError } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select();
  return checkError(response);
}

export async function fetchById(id) {
  const response = await client.from('dogs').select().match({ id }).single();
  return checkError(response);
}
