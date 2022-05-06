import { client } from './client.js';

export async function getFavPlaces() {
  const response = await client.from('favorite_placez').select('*');
  return response.body;
}

export async function getGemstones() {
  const response = await client.from('gemstonez').select('*');
  return response.body;
}

export async function getAnimals() {
  const response = await client.from('favorite_animalz').select('*');
  return response.body;
}

export async function getSingers() {
  const response = await client.from('favorite_singerz').select('*');
  return response.body;
}
