import { client, checkError } from './client';

export async function fetchDogs() {
  const response = await client.from('dogs').select();
  return checkError(response);
}

export async function fetchById(id) {
  const response = await client.from('dogs').select().match({ id }).single();
  return checkError(response);
}

export async function updateDog(dog) {
  const response = await client.from('dogs').update(dog).eq('id', dog.id);
  return checkError(response);
}

export async function createDog(dog) {
  const response = await client.from('dogs').insert(dog);
  return checkError(response);
}

export async function deleteDogById(id) {
  const response = await client.from('dogs').delete().match({ id });
  return checkError(response);
}
